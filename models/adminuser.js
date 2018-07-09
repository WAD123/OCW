const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Adminuser Schema
const AdminuserSchema = mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  center: {
    type: Array,
    defualt: "Not Specified"
  },
  password: {
    type: String,
    required: true
  },
  designation: {
    type : String,
    required: true
  },
  admin_level: {
    type: Number,
    required: true
  },
  book_approve: {
    type: Boolean
  },
  book_add: {
    type: Boolean
  },
  book_delete: {
    type: Boolean
  },
  adminuser_create : {
    type: Boolean
  },
  adminuser_modify : {
    type: Boolean
  },
  adminuser_delete: {
    type: Boolean
  },
  reports_view : {
    type: Boolean
  },
  manage_inventory: {
    type: Boolean
  }
});

const Adminuser = module.exports = mongoose.model('Adminuser', AdminuserSchema);

module.exports.getUserById = function(id, callback){
  Adminuser.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  Adminuser.findOne(query, callback);
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

module.exports.changePassword = function (id, adminuser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(adminuser.password, salt, (err, hash) => {
      console.log(adminuser.password);
      if(err) throw err;
      adminuser.password = hash;
      Adminuser.findByIdAndUpdate(id, adminuser, callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.getOtherAdmins = function(centers, admin_level, callback) {
  Adminuser.find({center: { $in : centers}}, callback).where('admin_level').gt(admin_level);
}

module.exports.updateAdminuser = function (id, newAdminuser, callback) {
  Adminuser.findByIdAndUpdate(id, newAdminuser, callback);
}

module.exports.deleteAdminuser = function (id, callback) {
  Adminuser.findByIdAndRemove(id, callback);
}