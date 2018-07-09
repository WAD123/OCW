const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// get info 
router.get('/getinfo', (req, res, next) => {

  Inventory.getInfo( (err, info) => {
    
    if (err) throw err;
    
    if (!info) {
      return res.json({ success: false, msg: 'Inventory information not found' });
    } else {
      res.json({
        success: true,
        inventory: info
      });
   }
  });

});

// get prices 
router.get('/getdetails', (req, res, next) => {

  Inventory.getDetails( (err, info) => {
    
    if (err) throw err;
    
    if (!info) {
      return res.json({ success: false, msg: 'Some error occured' });
    } else {
      // console.log(info);
      res.json({
        success: true,
        plan_details: info
      });
   }
  });

});

//update inventory 
router.post('/updateinventory', (req, res, next) => {
  
  let newInventory = {
        hotdesk_price : req.body.hotdesk_price,
        permanentbook_price : req.body.permanentbook_price,
        meetingroom_price : req.body.meetingroom_price,
        total_seats : req.body.total_seats,
        plan_duration : req.body.plan_duration
      }

  const id = req.body.inventory_id;

  Inventory.updateInventory(id, newInventory, (err) => {
        if(err) {
            res.json({success: false, msg: "Failed to update inventory!"});
        } else {
            res.json({success: true, msg: "Inventory updated."});
        } 
    });
});

module.exports = router;