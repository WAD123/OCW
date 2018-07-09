const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const bookingSchema = mongoose.Schema({
  username: {
    type: String
  },
  slot: {
    type: String
  },
  email: {
    type: String
  },
  plan: {
    type: String
  },
  isApproved: {
    type: Boolean
  }
});

const Booking = module.exports = mongoose.model('Booking', bookingSchema);

module.exports.getBookingById = function(id, callback){
  Booking.findById(id, callback);
}

module.exports.getBookingByUserData = function(username, email,  callback){
  
  const query = {
    username: username,
    email : email  
  }
  
  Booking.find(query, callback);
  
}

module.exports.getAllBookings = function(callback) {
  Booking.find({},callback);
  
}

module.exports.addBooking = function(newBooking, callback){
      newBooking.save(callback);
}

module.exports.approveBooking = function (id, callback) {
  Booking.findByIdAndUpdate(id, {isApproved:true}, callback);
}

module.exports.deleteBooking = function (id, callback) {
  Booking.findByIdAndRemove(id, callback);
}