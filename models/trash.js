const mongoose = require('mongoose');
const config = require('../config/database');

const trashSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: new Date()
  },
  item: {
    type: Object
  }, 
  itemType : {
      type : String
  }
});

const Trash = module.exports = mongoose.model('Trash', trashSchema);

module.exports.getTrash = function(callback) {
    Inventory.find({}, callback);
}

module.exports.addTrash = function(newTrash, callback){
      newTrash.save(callback);
}
