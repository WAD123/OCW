const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const meetingRoomSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: new Date()
  },
  username: {
    type: String
  },
  // name: {
  //   type: String
  // },
  center : {
    type : String,
    alias: "c",
    required : true,
    default : "Not specified"
  },
  // mtrid: {
  //   type: Number,
  //   default: 1
  // },
  email: {
    type: String
  },
  plan: {
    type: String
  },
  startdate: {
    type: Date
  },
  enddate: {
    type: Date
  },
  // amenities:{
  //   type:Array
  // },
  // starttime: {
    // type: Array
  // },
  // endtime: {
    // type: Array
  // },
  isApproved: {
    type: Boolean
  },
  isPendingApproval: {
    type: Boolean,
    default: true
  },
  amount: {
    type: Number,
    required: true
  },
  // amountBreakdown: {
  //   type: [Number],
  //   required: true
  // }
});

const MeetingRoom = module.exports = mongoose.model('MeetingRoom', meetingRoomSchema);

module.exports.getBookingById = function(id, callback){
  MeetingRoom.findById(id, callback);
}

module.exports.checkExistingBooking = function(data,callback){
  // console.log("date,",data)
  // MeetingRoom.findOne({center:data.center,startdate:new Date(data.startdate),plan:data.plan})
  MeetingRoom.find({$or:[{center:data.center,startdate:new Date(data.startdate),plan:data.plan},
    {center:data.center,startdate:{$gte:new Date(data.startdate),$lte:new Date(data.enddate)},plan:data.plan},
    {center:data.center,enddate:{$gte:new Date(data.startdate),$lte:new Date(data.enddate)},plan:data.plan}                  
  ]},callback);
  
}

module.exports.getBookingByUserData = function(username, email,  callback){
  
  const query = {
    username: username,
    email : email  
  }
  
  MeetingRoom.find(query, callback);
  
}

module.exports.getAllBookings = function(centers, callback) {
  MeetingRoom.find({ center : {$in : centers} },callback);
}

module.exports.addBooking = function(newBooking, callback){
      newBooking.save(callback);
}

module.exports.getBookingsByDate = function(date, center, mtrid, callback) {
  var startdate=new Date(date);
  var enddate=new Date(date);
  startdate.setHours(0);
  startdate.setMinutes(0);
  enddate.setHours(24);
  enddate.setMinutes(0);
  // console.log(startdate);
  // console.log(enddate);
  MeetingRoom.find({startdate: {$gte:startdate},enddate: {$lte:enddate},center: center, mtrid: mtrid}, callback);
}

module.exports.filterByParams = function (params, callback) {
  
  const query = {
    username : params.username,
    email: params.email,
    datefrom:params.datefrom,
    dateto:params.dateto,
    centers : params.centers
  }

  const a = MeetingRoom.find({ username:new RegExp(query.username),
     email: new RegExp(query.email), center : {$in : query.centers} }, callback);

  if(query.datefrom) {
    a.where('startdate').gte(query.datefrom);
  }

  if(query.dateto) {
    a.where('enddate').lte(query.dateto);
  }

  if(query.center) {
    a.where('center').equals(query.center);
  }
}

module.exports.approveBooking = function (id, status, callback) {
  MeetingRoom.findByIdAndUpdate(id, {isApproved:status, isPendingApproval:false}, callback);
}

module.exports.deleteBooking = function (id, callback) {
  MeetingRoom.findByIdAndRemove(id, callback);
}