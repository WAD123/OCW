const mongoose = require('mongoose');
const config = require('../config/database');

const activitySchema = mongoose.Schema({
  timestamp: {
    type: Date
  },
  content: {
    type: String
  }
});

const ActivitiesSchema = mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true
  },
  activities: {
    type: [activitySchema],
    default: []
  }
});

const Activities = module.exports = mongoose.model('Activities', ActivitiesSchema);

module.exports.getActivities = function(username, callback){
    Activities.find({username: username}, callback);
}

module.exports.addActivity = function(username,newActivityData, callback){
    // console.log("TRIED MY BEST");
    // console.log(username);
    // console.log(newActivityData);
    Activities.findOneAndUpdate({username:username}, {username: username, $push: {activities: newActivityData}}, {upsert: true} ,callback);
}