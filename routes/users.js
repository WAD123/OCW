const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
var path = require('path');
// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  
  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    
    user={
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password
    }
    
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        let token = jwt.sign(user, config.secret, {
          expiresIn: "1d" // 1 day
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
           
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
// get user info
router.get('/getUserInfo', (req, res, next) => {
const id = req.query.id;
// console.log(req.query)
  User.getUserById(id, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    } else {
      res.json({
        success: true,
        user: {
            id: user._id,  
            username: user.username,
            email:user.email,
            photoPath:user.photoPath,
            identityProofType:user.identityProofType,
            identityProofPath:user.identityProofPath,
            addressProofType:user.addressProofType,
            addressProofPath:user.addressProofPath

        }
      });
    }
  });
});
// check if username exists in db
router.post('/checkusername', (req, res, next) => {
  
  let username = req.body.username;
  
  User.getUserByUsername(username, (err, user) => {
    
    if(err) throw err;

    if(!user){
      res.json({success: false, msg:'Username not found'});
    } else {
      res.json({success: true, msg:'User found with this username'});
    }
  });
});
// all users list
router.get('/getinfo', (req, res, next) => {
  
  
  
  User.getAllUsers((err, users) => {
    
    if(err) throw err;
    // console.log(users);
    if(!users){
      res.json({success: false, msg:'No users exist'});
    } else {
      res.json({success: true, users:users,msg:'User found with this username'});
    }
  });
});
// Change Password
router.post('/changepassword', (req, res, next) => {
  
  const id = req.body.user_id;
  const currentPassword = req.body.currentPassword;
  const newPassword = req.body.newPassword;

  User.getUserById(id, (err, user) => {
    
    if(err) throw err;
    if(!user){
      res.json({success: false, msg: 'User not found'});
      return false;
    }

    User.comparePassword(currentPassword, user.password, (err, isMatch) => {
      
      if(err) throw err;
      
      if(isMatch){
        user.password = newPassword;
        User.changePassword(id, user, (err) => {
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

// updateprofile
router.post('/updateprofile', (req, res, next) => {
  
  let newProfile = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        //password : "1234"
      }
  
      const id = req.body.user_id;

  User.updateProfile(id, newProfile, (err) => {
        if(err) {
            res.json({success: false, msg: "Failed to update profile!"});
        } else {
            res.json({success: true, msg: "Profile updated."});
        } 
    });
});

router.post('/notify', (req,res,next) => {
  let newActivityData = {
    timestamp: new Date().toISOString(),
    content: req.body.activityContent,
  }
  const id = req.body.user_id;
  User.getUserById(id, (err, user) => {
    if(err) throw err;
    else{
      User.notifyUser(id, newAcitivityData, (err, newDataOfUser) => {
        if(err){
          res.json({success: false, msg: "Failed to update activities, try again later!"});
        }
        else{
          res.json({success: true, msg: "VOILA, Updated activities!"});
        }
      });
    }
  });
});
router.post('/KYC',(req,res,next)=>{
  User.getUserByEmail(req.body.email, (err, user) => {
    if(err) throw err;
    else{
      user.identityProofType = parseInt(req.body.identityProofType);
      user.addressProofType = parseInt(req.body.addressProofType);
      let basePath = path.join(__dirname, '..', 'public', 'uploads','\\');
      let isChanged = req.body.changedExisting;
      if(isChanged.findIndex(x=>x==2)){
          var base64ImageStr = req.body.photo.split(',')[1];
          let photoType = req.body.photo.split(',')[0].split(';')[0].split('/')[1]
          let photoName = user.id+"_"+Number(new Date())+"."+photoType;
          // console.log(photoType,photoName);
          require("fs").writeFile(basePath+"photo/"+photoName, base64ImageStr, 'base64', function(err) {
            // console.log(err)
            if(err)
              res.json({success:false,msg:err})
              else{
              
              }
          })
          user.photoPath = "/uploads/photo/"+photoName;
        }
      if(isChanged.findIndex(x=>x==1)){
        var base64addressProofStr = req.body.addressProof.split(',')[1];
        let addressProofType = req.body.addressProof.split(',')[0].split(';')[0].split('/')[1]
        let addressProofName = user.id+"_"+Number(new Date())+"."+addressProofType;
        require("fs").writeFile(basePath+"addressProof/"+addressProofName, base64addressProofStr, 'base64', function(err) {
          if(err)
            res.json({success:false,msg:err})
        })
        user.addressProofPath = "/uploads/addressProof/"+addressProofName;
      }
      if(isChanged.findIndex(x=>x==0)){
        var base64identityProofStr = req.body.identityProof.split(',')[1];
        let identityProofType = req.body.identityProof.split(',')[0].split(';')[0].split('/')[1]
        let identityProofName = user.id+"_"+Number(new Date())+"."+identityProofType;
        require("fs").writeFile(basePath+"identityProof/"+identityProofName, base64identityProofStr, 'base64', function(err) {
          if(err)

            res.json({success:false,msg:"Could not update KYC"});
        })
        user.identityProofPath = "/uploads/identityProof/"+identityProofName;
      }
      User.updateProfile(user.id, user, function(err,user){
        if(err)
          res.json({success: false, msg: "Could Not Upload"});
        else
          res.json({success: true, msg: "KYC updated successfully"})

      });
      
    }
  });
  

})
// filter all users
router.post('/filterusers', (req, res, next) => {

  const params = {
    username : req.body.username,
    email : req.body.email,
    name : req.body.name,
    phone : req.body.phone
  }
 
  User.filterUsers( params, (err, users) => {
    if (err) throw err;
    
    if (!users) {
      res.json({ success: false, msg: 'Customer not found' });
    } else {
      res.json({
        success: true,
        customers : users
      });
   }
  });

});

// JG: GET ALL USERS
router.get('/allUsers', (req, res, next) => {
  User.getAllUsers((err, users) => {
    if (err) {return res.json({ success: false, msg: 'Some erroe occured!' })}
    if (!users) {return res.json({ success: false, msg: 'Users not found!' });}
    else {
      res.json({
        success: true,
        msg: 'Users List',
        data: users
      });
    }
  });
});

module.exports = router;