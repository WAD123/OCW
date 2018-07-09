const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const config = require('../config/database');
// const User = require('../models/user');
const Activities = require('../models/activity');

router.post('/addactivity', (req,res,next) => {
    // console.log("added activity");
    let newActivityData = {
        timestamp: req.body.timestamp,
        content: req.body.content,
    }

    const username = req.body.username;

    Activities.addActivity(username, newActivityData, (err) => {
        // console.log("IN CALLBACK!");
        // console.log(err);
        // console.log(newDataOfUser);
        if(err){
            res.json({success: false, msg: "Failed to update activities, try again later!"});
        }
        else{
            res.json({success: true, msg: "VOILA, Updated activities!"});
        }
    });
});

router.post('/getactivities', (req,res,next) => {
    // console.log("IN ROUTE ACTIVITIES");
    const username = req.body.username;
    Activities.getActivities(username, (err, data) => {
        if(err)
            res.json({success: false, msg: "Failed to update activities, try again later!"});
        else
            res.json({success: true, msg: "VOILA, Updated activities!", data: data});
        // console.log("DONE");
    });
});

module.exports = router;