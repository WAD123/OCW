const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


// User Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      isAsync: true,
      validator: function (value, isValid) {
          const self = this;
          return self.constructor.findOne({
                  email: value
              })
              .exec(function (err, user) {
                  if (err) {
                      throw err;
                  } else if (user) {
                      if (self.id === user.id) { // if finding and saving then it's valid even for existing email
                          return isValid(true);
                      }
                      return isValid(false);
                  } else {
                      return isValid(true);
                  }

              })
      },
      message: 'The email address is already taken!'
  },
  },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  password: {
    type: String,
    required: true
  },
  identityProofType:{
    type: Number,
  },
  addressProofType:{
    type: Number,
  },
  photoPath:{
    type: String,
    unique: true
  },
  addressProofPath:{
    type: String,
    unique: true
  },
  identityProofPath:{
    type: String,
    unique: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.getAllUsers = function(username, callback){
  const query = {};
  User.find(query, callback);
}
module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.changePassword = function (id, user, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      console.log(user.password);
      if(err) throw err;
      user.password = hash;
      User.findByIdAndUpdate(id, user, callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.updateProfile = function(id, newProfile, callback) {
  User.findByIdAndUpdate(id, newProfile, callback);
}

module.exports.filterUsers = function(params, callback) {
  User.find({ username:new RegExp(params.username), email: new RegExp(params.email), 
    name: new RegExp(params.name) }, callback);
}

module.exports.getAllUsers = function (callback) {
  User.find({}).sort({username: -1}).exec(callback);
}