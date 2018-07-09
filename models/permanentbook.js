const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const permanentbookSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: new Date()
  },
  username: {
    type: String
  },
  name: {
    type: String
  },
  center : {
    type : String,
    alias: "c",
    required : true,
    default : "Not specified"
  },
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
  seats: {
    type: String
  }, 
  seatsNumber: {
      type: Array
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  isPendingApproval: {
    type: Boolean,
    default: true
  },
  amount: {
    type: Number,
    required: true
  },
  amountBreakdown: {
    type: [Number],
    required: true
  }
});

const PermanentBook = module.exports = mongoose.model('PermanentBook', permanentbookSchema);

module.exports.getBookingById = function(id, callback){
  PermanentBook.findById(id, callback);
}

module.exports.getBookingByUserData = function(username, email,  callback){
  
  const query = {
    username: username,
    email : email  
  }
  
  PermanentBook.find(query, callback);
  
}

module.exports.filterByParams = function (params, callback) {
  
  const query = {
    username : params.username,
    email: params.email,
    plan : params.plan,
    startdatefrom: params.startdatefrom,
    startdateto: params.startdateto,
    enddatefrom: params.enddatefrom,
    enddateto: params.enddateto,
    centers : params.centers,
    seatsNumber : params.seatsNumber
  }

  const a = PermanentBook.find({username:new RegExp(query.username), 
    email: new RegExp(query.email), center : {$in : query.centers} }, callback);

  if(query.seatsNumber) {
    a.where('seatsNumber').in(query.seatsNumber);
  }

  if (query.plan && query.plan!="all") {
    a.where('plan').equals(query.plan);
  }

  if(query.startdatefrom) {
    a.where('startdate').gte(query.startdatefrom);
  }

  if(query.startdateto) {
    a.where('startdate').lte(query.startdateto);
  }

  if(query.enddatefrom) {
    a.where('enddate').gte(query.enddatefrom);
  }

  if(query.enddateto) {
    a.where('enddate').lte(query.enddateto);
  }
}

module.exports.getAllBookings = function(centers, callback) {
  PermanentBook.find({center : { $in: centers} },callback);
}

module.exports.getAllCenterwiseBookings = function (center, callback) {
  PermanentBook.find({center : center}, callback);
}

module.exports.addBooking = function(newBooking, callback){
      newBooking.save(callback);
}

module.exports.approveBooking = function (id, status, callback) {
  PermanentBook.findByIdAndUpdate(id, {isApproved:status, isPendingApproval:false}, callback);
}

module.exports.deleteBooking = function (id, callback) {
  PermanentBook.findByIdAndRemove(id, callback);
}