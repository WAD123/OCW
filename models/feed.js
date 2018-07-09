const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const commentSchema = mongoose.Schema({
  content: {
    type: String
  },
  timestamp: {
    type: Date
  },
  by: {
    type: String
  }
});

// User Schema
const feedSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    // default: Date.now
  },
  username: {
    type: String
  },
  content: {
    type: String
  },

  likes: {
    count: {
      type: Number,
      default: 0
    },
    by: [{type : String}]
  },

  comments: {
    commentCount: {
      type: Number,
      default: 0
    },
    commentArray: {
      type: [commentSchema],
      default: []
    }
  }

});


// For commentSchema Plan B!
// const comment = module.exports = mongoose.model('Feed', commentSchema);

const Feed = module.exports = mongoose.model('Feed', feedSchema);

module.exports.addFeed = function (newFeed, callback) {
  newFeed.save(callback);
}

module.exports.getAllPosts = function (callback) {
  Feed.find({}).sort({timestamp: -1}).exec(callback);
}

module.exports.getTargetPost = function (id, callback) {
  Feed.findById(id, callback);
}
module.exports.updateTargetPost = function (id, newPostData, callback) {
  Feed.findByIdAndUpdate(id, { content: newPostData.content, likes: newPostData.likes, comments: newPostData.comments }, {new : true}, callback);
}
module.exports.updateComment = function(post_id,commentData,callback){
  Feed.findByIdAndUpdate(post_id, { $set:{["comments.commentArray."+commentData.comment_index+".content"]:commentData.content,["comments.commentArray."+commentData.comment_index+".timestamp"]:commentData.timestamp}}, {new : true}, callback);
}
module.exports.deleteComment = function(post_id,commentId,callback){
  Feed.findByIdAndUpdate(post_id, { $pull:{"comments.commentArray":{_id:commentId}}}, {new : true}, callback);
}

module.exports.deletePost = function (id, callback) {
  Feed.findByIdAndRemove(id, callback);
}