const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Adminuser = require('../models/adminuser');
const jwt = require('jsonwebtoken');  

// get designations
router.get('/getdesignations', (req, res, next) => {
  var globalDesignations =["CEO", "Area Head", "Manager", "Executive", "Associate"];
  res.json({globalDesignations});
});

// Register
router.post('/register', (req, res, next) => {
    let newAdminuser = new Adminuser({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        designation: req.body.designation,
        admin_level: req.body.admin_level,
        book_approve: req.body.book_approve,
        book_add: req.body.book_add,
        book_delete: req.body.book_delete,
        adminuser_create: req.body.adminuser_create,
        adminuser_modify: req.body.adminuser_modify,
        adminuser_delete: req.body.adminuser_delete,
        reports_view: req.body.reports_view,
        manage_inventory: req.body.manage_inventory,
        center: req.body.center
    });
    
    Adminuser.addUser (newAdminuser, (err,adminuser) => {
        if(err) {
          console.log(err);
            res.json({success: false, msg: "Failed to register user"});
        } else {
            res.json({success: true, msg: "Admin user registered"});
        }
    });
});

// Authenticate   
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  Adminuser.getUserByUsername(username, (err, adminuser) => {
    if(err) throw err;
    if(!adminuser){
      return res.json({success: false, msg: 'User not found'});
    }

    Adminuser.comparePassword(password, adminuser.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(adminuser.toJSON(), config.secret, {
          expiresIn: 86400 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          adminuser: {
            id: adminuser._id,
            name: adminuser.name,
            username: adminuser.username,
            designation: adminuser.designation,
            admin_level: adminuser.admin_level,
            book_approve: adminuser.book_approve,
            book_add: adminuser.book_add,
            book_delete: adminuser.book_delete,
            adminuser_create: adminuser.adminuser_create,
            adminuser_modify: adminuser.adminuser_modify,
            adminuser_delete: adminuser.adminuser_delete,
            reports_view: adminuser.reports_view,
            manage_inventory: adminuser.manage_inventory,
            center: adminuser.center
        }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.post('/adminprofile', (req, res, next) => {
  
  const id = req.body.id;
  Adminuser.getUserById(id, (err, adminuser) => {
    if(err) throw err;
    if(!adminuser){
      return res.json({success: false, msg: 'User not found'});
    } else {
      res.json({
        success: true,
        adminuser: {
            id: adminuser._id,
            name: adminuser.name,
            username: adminuser.username,
            designation: adminuser.designation,
            admin_level: adminuser.admin_level,
            book_approve: adminuser.book_approve,
            book_add: adminuser.book_add,
            book_delete: adminuser.book_delete,
            adminuser_create: adminuser.adminuser_create,
            adminuser_modify: adminuser.adminuser_modify,
            adminuser_delete: adminuser.adminuser_delete,
            reports_view: adminuser.reports_view,
            manage_inventory: adminuser.manage_inventory,
            center: adminuser.center
        }
      });
    }
  });
});

// return admins having greater admin levels and same centers
router.post('/getotheradmins', (req, res, next) => {

  const admin_level = req.body.admin_level;
  const centers = req.body.centers;

  Adminuser.getOtherAdmins( centers, admin_level, (err, admins) => {
    if (err) throw err;
    
    if (!admins) {
      return res.json({ success: false, msg: 'Other Admins not found' });
    } else {
      res.json({
        success: true,
        otheradmins: admins
      });
   }
  });

});

//update admin user 
router.post('/updateadmin', (req, res, next) => {
  
  let newAdminuser = {
        name: req.body.name,
        designation: req.body.designation,
        admin_level: req.body.admin_level,
        book_approve: req.body.book_approve,
        book_add: req.body.book_add,
        book_delete: req.body.book_delete,
        adminuser_create: req.body.adminuser_create,
        adminuser_modify: req.body.adminuser_modify,
        adminuser_delete: req.body.adminuser_delete,
        reports_view: req.body.reports_view,
        manage_inventory: req.body.manage_inventory,
        center : req.body.center
  }

  const id = req.body.admin_id;

  Adminuser.updateAdminuser(id, newAdminuser, (err,adminuser) => {
        if(err) {
            res.json({success: false, msg: "Failed to update user"});
        } else {
            res.json({success: true, msg: "Admin user updated."});
        }
    });
});

//delete admin user 
router.post('/deleteadmin', (req, res, next) => {
  
  const id = req.body.id;
  
  Adminuser.deleteAdminuser(id, (err) => {
    if(err){
    res.json({success: false, msg:'Failed to delete user'});
    } else {
    res.json({success: true, msg:'User Deleted!'});
    }
  });
});

// check if username exists in db
router.post('/checkusername', (req, res, next) => {
  
  let username = req.body.username;
  
  Adminuser.getUserByUsername(username, (err, adminuser) => {
    
    if(err) throw err;
    
    if(!adminuser){
      res.json({success: false, msg:'Username not found'});
    } else {
      res.json({success: true, msg:'Admin user found with this username'});
    }
  });
});

// Change Password
router.post('/changepassword', (req, res, next) => {
  
  const id = req.body.adminuser_id;
  const currentPassword = req.body.currentPassword;
  const newPassword = req.body.newPassword;
  
  Adminuser.getUserById(id, (err, adminuser) => {
    if(err) throw err;
    
    if(!adminuser){
      res.json({success: false, msg: 'Admin user not found'});
      return false;
    }

    Adminuser.comparePassword(currentPassword, adminuser.password, (err, isMatch) => {
      
      if(err) throw err;
      
      if(isMatch){
        adminuser.password = newPassword;
        Adminuser.changePassword(id, adminuser, (err) => {
          if(err) {
            res.json({success: false, msg: "Failed to update profile!"});
          } else {
            res.json({success: true, msg: "Password successfully changed!"});   
          } 
        });
      } else {
        res.json({success: false, isMatch: false, msg: "Current Password doesn't match"});
      }
      
    });
  });
});


module.exports = router;