const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Feed = require('../models/feed');



router.post('/createpost', (req, res, next) => {
  let newFeed = new Feed({
    timestamp: new Date(),
    username: req.body.username,
    content: req.body.content
  });
  // newFeed.timestamp=newFeed.timestamp.slice(0,newFeed.timestamp.indexOf("T"));

  Feed.addFeed (newFeed, (err,post) => {
    if(err){
      console.log(err);
      res.json({success: false, msg:'Failed to add your post'});
    } else {
      res.json({success: true, msg:'Post Added'});
    }
  });
});

router.get('/fetchallposts', (req, res, next) => {
    Feed.getAllPosts((err, feed) => {
        if (err) throw err;
    
        if (!feed) {
            return res.json({ success: false, msg: 'Posts not found' });
        } else {
            res.json({
                success: true,
                allPosts: feed
            });
        }
    });
});

router.post('/likepost', (req, res, next) => {
  
  const post_id = req.body.post_id;
  const likedby = req.body.likedby;
  const isliked = req.body.isliked;
  // console.log("post_id: "+post_id);
  // console.log("likedby: "+likedby);
  // console.log("isliked: "+isliked);
  Feed.getTargetPost(post_id, (err, post) => {
    if(err)
      res.json({success:false,result:post});
    else{
      // console.log("post");
      // console.log(post);
      if(isliked){
        if(!post.likes.by.includes(likedby)){
          post.likes.by.push(likedby);
          post.likes.count=post.likes.by.length;
        }
      }
      else{
        if(post.likes.by.includes(likedby)){
          post.likes.by.splice(post.likes.by.indexOf(likedby),1);
          post.likes.count=post.likes.by.length;
        }
      }
      // console.log("post-updated");
      // console.log(post);
      Feed.updateTargetPost(post_id, post, (err, result) => {
        if(err)
          res.json({success:false,result:post});
        else{
          // console.log("result");
          // console.log(result);
          res.json({success:true,result:post});
          // console.log(post);
        }
      });
    }
  });
});

router.post('/addcomment', (req, res, next) => {
  
  const post_id = req.body.post_id;
  // const commentby = req.body.commentby;
  // const content = req.body.content;
  const commentData = {
    timestamp: new Date().toISOString(),
    content: req.body.content,
    by: req.body.commentby
  }
  // console.log("post_id: "+post_id);
  // console.log("likedby: "+likedby);
  // console.log("isliked: "+isliked);
  Feed.getTargetPost(post_id, (err, post) => {
    if(err)
      res.json({success:false,result:post});
    else{
      // console.log("post");
      // console.log(post);
      post.comments.commentArray.push(commentData);
      if(!post.comments.commentCount){
        post.comments.commentCount=1;
      }
      else{
        post.comments.commentCount+=1;
      }
      // console.log("post-updated");
      // console.log(post);
      Feed.updateTargetPost(post_id, post, (err, result) => {
        if(err)
          res.json({success:false,result:post});
        else{
          // console.log("result");
          // console.log(result);
          res.json({success:true,result:result});
        }
      });
    }
  });
});

router.post('/modifycomment', (req, res, next) => {
  
  const post_id = req.body.post_id;
  
  Feed.getTargetPost(post_id, (err, post) => {
    if(err)
      res.json({success:false,result:err});
    else{
      // console.log("post");
      // console.log(post);
      if(req.body.action){
        //EDIT MODE
        const commentData = {
          timestamp: new Date().toISOString(),
          content: req.body.newContent,
          // by: req.body.commentby,
          comment_index: req.body.commentIndex
        }
        Feed.updateComment(post_id, commentData, (err, newPost) => {
          if(err)
            res.json({success:false,result:newPost});
          else{
            // console.log(newPost);
            res.json({success:true,result:newPost});            
          }
        });
      }
      else{
        //DELETE MODE
        Feed.deleteComment(post_id, req.body.commentId, (err, newPost) => {
          if(err)
            res.json({success:false,result:newPost});
          else{
            // console.log(newPost);
            res.json({success:true,result:newPost});            
          }
        });
      }
    }
  });
});


router.post('/deletepost', (req, res, next) => {
  
  let id = req.body.id;

  Feed.deletePost (id, (err) => {
    if(err){
      res.json({success: false, msg:'Failed to delete your post'});
    } else {
      res.json({success: true, msg:'Post Deleted'});
    }
  });
});

module.exports = router;