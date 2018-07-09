const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const virtualOfficeSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: new Date()
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  plan: {
    type: String
  },
  startdate: {
    type: String
  },
  /*starttime: {
    type: String
  },*/
  enddate: {
    type: String
  },
  /*endtime: {
    type: String
  },*/
  /*seats: {
    type: String
  }*/
});

const VirtualOffice = module.exports = mongoose.model('VirtualOffice', virtualOfficeSchema);

module.exports.getBookingById = function(id, callback){
  VirtualOffice.findById(id, callback);
}

module.exports.getBookingByUserData = function(username, email,  callback){
  
  const query = {
    username: username,
    email : email  
  }
  
  VirtualOffice.find(query, callback);
  
}

module.exports.getAllBookings = function(callback) {
  VirtualOffice.find({
   
  },callback);
  
}

module.exports.addBooking = function(newBooking, callback){
      newBooking.save(callback);
}