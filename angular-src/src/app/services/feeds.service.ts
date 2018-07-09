import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedsService {

  constructor(private http:Http) { }

  createPost(postData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('feeds/createpost', postData, { headers: headers })
      .map(res => res.json());      
  }

  fetchPosts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('feeds/fetchallposts', { headers: headers })
      .map(res => res.json());
  }

  likePost(likeData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('feeds/likepost', likeData, { headers: headers })
      .map(res => res.json());
  }
  addComment(commentData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('feeds/addcomment', commentData, { headers: headers })
      .map(res => res.json());      
  }
  modifyComment(commentData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('feeds/modifycomment', commentData, { headers: headers })
      .map(res => res.json());      
  }

  deletePost(post_id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('feeds/deletepost', post_id, { headers: headers })
      .map(res => res.json());      
  }

}
