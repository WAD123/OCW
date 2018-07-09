import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {FeedsService} from '../../../services/feeds.service';
import {fadeInDashboard, listAnimation} from '../../../animations/index';

@Component({
  selector: 'app-membersfeed',
  templateUrl: './membersfeed.component.html',
  styleUrls: ['./membersfeed.component.css'],
  animations: [fadeInDashboard, listAnimation],
  host: { '[@fadeInDashboard]': '' },
})
export class MembersfeedComponent implements OnInit {

  username: String;
  name: String;
  email: String;
  allposts: any=[];
  postcontent: String;
  likes: Boolean[] = [];
  newComment: String[]=[];
  commentEditMode:Object={
    edit_id: null,
    menu_id: null
  }

  constructor(  
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private feedsService:FeedsService
  ) { }


  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.email = profile.user.email;
      this.name = profile.user.name;
    },
    err => {
      console.log("ERROR"+err);
      return false;
    });
    this.fetchAllPosts();
  }
  fetchAllPosts(){
    
    this.feedsService.fetchPosts().subscribe( (allpostsData) => {
      if(allpostsData.success) {
        this.allposts = allpostsData.allPosts;
        for ( let i=0; i<this.allposts.length; i++) {
          if(this.allposts[i].likes.by.indexOf(this.name)+1){
            this.likes[i]=true;
          }
          else{
            this.likes[i]=false;
          }
        }
      }
    });
  }

  addPost() {
    const postData = {
      username: this.username,
      content: this.postcontent
    }
    this.feedsService.createPost(postData).subscribe((data) => {
      if (data.success) {
          // this.flashMessage.show('Post Added', { cssClass: 'alert-success', timeout: 3000 });
          this.authService.addActivity("Added post in Feeds!").subscribe();
          this.postcontent="";
          this.fetchAllPosts();
        } else {
          console.log(data);
          this.flashMessage.show('Failed to add your post', { cssClass: 'alert-danger', timeout: 3000 });
        }
    });
  }  

  updateLikes(id,i) {
    
    this.likes[i]=!this.likes[i];
    
    const likeData = {
     post_id : id,
     likedby: this.username,
     isliked: this.likes[i]
    }
    if(likeData.isliked){
      // console.log("LIKED");
      this.allposts[i].likes.count+=1;
    }
    else{
      // console.log("UNLIKED");
      this.allposts[i].likes.count-=1;
    }
    this.feedsService.likePost(likeData).subscribe((data) => {
      if (!data.success) {
        this.flashMessage.show('Failed to add your like to the post', { cssClass: 'alert-danger', timeout: 3000 });
      }
      else{
        // console.log("this.allposts[i].likes");
        // console.log(this.allposts[i].likes);
        // console.log("data.result.likes");
        // console.log(data.result.likes);
        this.allposts[i]=data.result;
        // if(likeData.isliked)
        //   this.flashMessage.show('Added your like to the post', { cssClass: 'alert-success', timeout: 3000 });
        // else
        //   this.flashMessage.show('Removed your like from the post', { cssClass: 'alert-success', timeout: 3000 });
        // this.fetchAllPosts();
      }
    });

  }

  addComment(id,i){
    console.log(this.newComment);
    const commentData={
      post_id : id,
      commentby: this.username,
      content: this.newComment
    }
    this.feedsService.addComment(commentData).subscribe((data) => {
      if (!data.success) {
        this.flashMessage.show('Failed to add your like to the post', { cssClass: 'alert-danger', timeout: 3000 });
      }
      else{
        // if(likeData.isliked)
        //   this.flashMessage.show('Added your like to the post', { cssClass: 'alert-success', timeout: 3000 });
        // else
        //   this.flashMessage.show('Removed your like from the post', { cssClass: 'alert-success', timeout: 3000 });
        this.allposts[i]=data.result;
        this.newComment[i]="";
        // this.fetchAllPosts();
      }
    });
  }
  modifyComment(action,i=0,j=0){
    // action -> 1 means EDIT, 0 means DELETE
    // console.log(this.allposts[i]._id);
    // console.log("j: "+j);
    // console.log(this.allposts[i].comments.commentArray[j]._id);
    if(action){
      //EDIT
      const dataRequired={
        action: action,
        post_id:this.allposts[i]._id,
        commentIndex:j,
        newContent: this.allposts[i].comments.commentArray[j].content
      }
      // console.log("EDIT HERE");
      this.feedsService.modifyComment(dataRequired).subscribe((data) => {
        if(data.success){
          // console.log(data.result);
          this.allposts[i]=data.result;
          this.commentEditMode["menu_id"]=null;
          this.commentEditMode["edit_id"]=null;
          this.authService.addActivity("Modified comment").subscribe();
        }
      });
      // console.log(this.allposts[i].comments.commentArray[j].content);
      // console.log(this.allposts[i].comments.commentArray[j]._id);
    }
    else{
      //DELETE
      // console.log("DELETE HERE");
      const dataRequired={
        action: action,
        post_id:this.allposts[i]._id,
        commentId:this.allposts[i].comments.commentArray[j]._id
      }
      this.feedsService.modifyComment(dataRequired).subscribe((data) => {
        if(data.success){
          // console.log(data.result);
          this.allposts[i]=data.result;
          this.commentEditMode["menu_id"]=null;
          this.commentEditMode["edit_id"]=null;
          this.authService.addActivity("Deleted comment").subscribe();
        }
      });
    }
  }
  deletePost(post) {

    if(!confirm("Sure?") || post.username!=this.username) {
      return false;
    }

    const post_id = {
      id : post._id
    }

    this.feedsService.deletePost(post_id).subscribe((data) => {
      if (data.success) {
          this.flashMessage.show('Post Deleted', { cssClass: 'alert-success', timeout: 3000 });
          this.authService.addActivity("Deleted Post").subscribe();
          this.fetchAllPosts();
        } else {
          this.flashMessage.show('Failed to delete your Post', { cssClass: 'alert-danger', timeout: 3000 });
        }
    });
  }

  
}
