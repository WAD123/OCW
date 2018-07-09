const mongoose = require('mongoose');
const config = require('../config/database');

// Inventory Schema
const inventorySchema = mongoose.Schema({

    hotdesk_price: {
        _1DP: {
            type: Number
        },
        _4DP: {
            type: Number
        },
        _10DP: {
            type: Number
        }
    },

    permanentbook_price: {
        _18DP: {
            type: Number
        },
        _30DP: {
            type: Number
        }
    },

    meetingroom_price: {
        price: {
            type: Number
        },
        // number of meeting rooms in the center
        total : {
            type : Number
        }
    },

    // total dedicated seats 
    total_seats : {
        type : Number
    },

    plan_duration : {
        type : Number
    }
});

const Inventory = module.exports = mongoose.model('Inventory', inventorySchema);

module.exports.getInfo = function(callback) {
    Inventory.find({}, callback);
}

module.exports.updateInventory = function(id, newInventory, callback){
    Inventory.findByIdAndUpdate(id, newInventory, callback);
}

module.exports.getDetails = function(callback) {
    Inventory.find({},{hotdesk_price:1, permanentbook_price:1, meetingroom_price:1, plan_duration:1, center:1, total_seats:1 }, callback);
}