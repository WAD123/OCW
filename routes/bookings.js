const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Booking = require('../models/booking');
const Hotdesking = require('../models/hotdesking');
const Trash = require('../models/trash');
const PermanentBook = require('../models/permanentbook');
const MeetingRoom = require('../models/meetingroom');
const VirtualOffice = require('../models/virtualoffice');
const paymentHash = require("../config/paymentHash");

//Book Hotdesks
router.post('/hotdesking', (req, res, next) => {
  let newHotdesking = new Hotdesking({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    plan: req.body.plan,
    startdate : req.body.startdate,
    enddate : req.body.enddate,
    seats: req.body.seats,
    center : req.body.center,
    amount : req.body.amount,
    amountBreakdown: req.body.amountBreakdown
  });

  Hotdesking.addBooking(newHotdesking, (err, booking) => {
    if(err){
      res.json({success: false, msg:'Failed to book'});
    } else {
      res.json({success: true, msg:'Booked!'});
    }
  });
});

//Book Permanent
router.post('/permanentbook', (req, res, next) => {

  let newPermanentBook = new PermanentBook({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    plan: req.body.plan,
    startdate: req.body.startdate,
    enddate: req.body.enddate,
    seats: req.body.seats,
    seatsNumber: req.body.seatsNumber,
    center: req.body.center,
    amount : req.body.amount,
    amountBreakdown: req.body.amountBreakdown
  });

  // const params = {
  //   seatsNumber: req.body.seatsNumber,
  //   center: req.body.center
  // }

  // PermanentBook.filterByParams(params, (err, booking) => {

  //   if (err) throw err;
    
  //   return new Promise( (resolve) => {
  //     var flag = 0;
  //     if (booking) {
  //       for (let eachbooking of booking) {
  //         // checking if the exisiting dates clash with the requested one
  //         if ( req.body.enddate < eachbooking.startdate ||  req.body.startdate > eachbooking.enddate ) {
  //         } else {
  //           flag = 1;
  //           break;
  //         }
  //       }
  //     }
  //     resolve(flag);
  //   }).then( (flag) => {
  //     if (flag==0) {
        PermanentBook.addBooking(newPermanentBook, (err, booking) => {
          if (err) {
            res.json({ success: false, msg: 'Failed to book' });
          } else {
            res.json({ success: true, msg: 'Booked!' });
          }
        });
  //     }
  //   });
  // });


  // console.log(newPermanentBook);
  // newPermanentBook.startdate=newPermanentBook.startdate.slice(0,newPermanentBook.startdate.indexOf("T"));
  // newPermanentBook.enddate=newPermanentBook.enddate.slice(0,newPermanentBook.enddate.indexOf("T"));
  
});

//get meeting room bookings by date
router.post('/getmeetingroombookingsbydate', (req, res, next) => {

  const center = req.body.center;
  const date = req.body.startdate;
  const mtrid = req.body.mtrid;

  MeetingRoom.getBookingsByDate (date, center, mtrid, (err,booking) => {
    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Meeting room Booking not found' });
    } else {
      res.json({
        success: true,
        MeetingRoomBookings : booking
      });
    }

  });
});

// get all meeting room bookings
router.post('/getallmeetingroombookings', (req, res, next) => {

  const centers = req.body.centers;
  
  MeetingRoom.getAllBookings (centers, (err,booking) => {
    if (err) throw err;
    if (!booking) {
      return res.json({ success: false, msg: 'Meeting room Bookings not found' });
    } else {
      res.json({
        success: true,
        MeetingRoomBookings : booking
      });
    }

  });
});

// Filter meeting room bookings
router.post('/filtermeetingroombookings', (req, res, next) => {

  const params = {
    username : req.body.username,
    email : req.body.email,
    datefrom: req.body.datefrom,
    dateto: req.body.dateto,
    centers : req.body.centers
  }

  MeetingRoom.filterByParams( params, (err, booking) => {
    
    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        MeetingRoomBookings : booking
      });
   }
  });
});

//approve meeting room booking
router.post('/approvemeetingroombooking', (req, res, next) => {
  const book_id = req.body.book_id;
  const book_status = req.body.book_status;
 
  MeetingRoom.approveBooking(book_id, book_status, (err) => {
    if(err){
    res.json({success: false, msg:'Failed to approve'});
    } else {
    res.json({success: true, status: book_status, msg:'Approved!'});
    }
  });
});

//delete meeting room booking
router.post('/deletemeetingroombooking', (req, res, next) => {
  const book_id = req.body.book_id;
 
  MeetingRoom.deleteBooking(book_id, (err) => {
    if(err){
    res.json({success: false, msg:'Failed to delete'});
    } else {
    res.json({success: true, msg:'Deleted!'});
    }
  });
});



// Book meeting room
router.post('/meetingroom', (req,res,next) => {
let newMeetingRoom = new MeetingRoom({
    // name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    startdate : req.body.startdate,
    enddate : req.body.enddate,
    plan: req.body.plan,
    isApproved:false,
    amenities:req.body.amenties,
    // mtrid: req.body.mtrid,
    // startdate: req.body.startdate,
    center : req.body.center,
    amount : req.body.amount,
    // amountBreakdown: req.body.amountBreakdown
  });
  // console.log(req);
  MeetingRoom.checkExistingBooking(req.body,(err,booking)=>{
    // console.log("exists");
    if(err){
      // console.log("error",err);
      res.json({ success: false, msg: 'Failed to book' });
    }
    // console.log("booking",booking)
    if(booking && booking.length>0){
      console.log(booking)
        res.json({success:false,msg:'Booking for this package type and center at this time already exists.Please try for another time duration'})    
    }
    else{
      MeetingRoom.addBooking(newMeetingRoom, (err, booking) => {
        if (err) {
          // console.log(err);
          res.json({ success: false, msg: 'Failed to book' });
        }
        else {
          res.json({ success: true, msg: 'Booking sent for approval!' });
        }
      });
    }

  });
 
});
//   let flag = null;

//   // checking if a similar booking exists
//   MeetingRoom.getBookingsByDate(req.body.date, req.body.center, (err, booking) => {
//     if (err) throw err;

//     if (booking) {
//       flag = true;
//       console.log(booking.length);
//       // for (let eachbooking of booking) {
//       //   for (let stbooked of eachbooking.starttime) {
//       //     if (stbooked.includes(req.body.starttime)) {
//       //       console.log('yesabab');
//       //       res.json({ success: false, msg: 'Failed to book. A conflicting booking exists' });
//       //       flag = false;
//       //       break;
//       //     }
//       //   }
//       // }
//     }

//     if (flag) {
//       MeetingRoom.addBooking(newMeetingRoom, (err, booking) => {
//         if (err) {
//           res.json({ success: false, msg: 'Failed to book' });
//         }
//         else {
//           res.json({ success: true, msg: 'Booked!' });
//         }
//       });
//     }
//   }); 
// });

router.post('/virtualoffice', (req,res,next) => {
  let newVirtualOffice = new VirtualOffice({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    startdate : req.body.startdate,
    enddate : req.body.enddate,
    plan: req.body.plan,
    center : req.body.center,
    // amount : req.body.amount
  });
  VirtualOffice.addBooking(newVirtualOffice, (err,booking) => {
    if(err){
      res.json({success: false, msg:'Failed to book'});
    }
    else{
      res.json({success: true, msg:'Booked!'});
    }
  });
});

// getcenterpermanentbooking
router.post('/getcenterpermanentbooking', (req, res, next)=> {

  const center = req.body.center;

  PermanentBook.getAllCenterwiseBookings (center, (err, booking) => {

    if(err)
        throw err;

    if(!booking) {
      return res.json({ success: false, msg: 'Centerwise Permanent Booking not found'});
    } else {
      res.json({
        success : true,
        PermanentBookings : booking
      });
    }
  });
});

router.post('/getpermanentbookingbyid', (req, res, next) => {
  
  const id = req.body.id;

  PermanentBook.getBookingById(id , (err, booking) => {
    
    if(err)
      throw err;

    if(!booking) {
      res.json({success: false, msg: "Booking not found"});
      return false;
    } else {
      res.json({
        success: true,
        PermanentBooking : booking
      });
    }
  });
});

router.post('/gethotdeskbookingbyid', (req, res, next) => {
  
  const id = req.body.id;

  Hotdesking.getBookingById(id , (err, booking) => {
    
    if(err)
      throw err;

    if(!booking) {
      res.json({success: false, msg: "Booking not found"});
      return false;
    } else {
      res.json({
        success: true,
        HotdeskBooking : booking
      });
    }
  });
});

router.post('/getmtrbookingbyid', (req, res, next) => {
  
  const id = req.body.id;

  MeetingRoom.getBookingById(id , (err, booking) => {
    
    if(err)
      throw err;

    if(!booking) {
      res.json({success: false, msg: "Booking not found"});
      return false;
    } else {
      res.json({
        success: true,
        mtrBooking : booking
      });
    }
  });
});

// Get Permanent Bookings
router.post('/getpermanentbooking', (req, res, next) => {

  const centers = req.body.centers;
  
  PermanentBook.getAllBookings( centers, (err, booking) => {

    if (err) throw err;
    
    if (!booking) {
      res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        PermanentBookings: booking
      });
   }
  });
});

// move to trash
router.post('/movetotrash', (req, res,next) => {
  
  let newTrash = new Trash({
   item : req.body.item,
   itemType : req.body.itemType
  });

  Trash.addTrash(newTrash, (err, trash) => {
    if(err){
      res.json({success: false, msg:'Failed to add to trash'});
    } else {
      res.json({success: true, msg:'Trashed!'});
    }
  });

});

// filter permanent bookings
router.post('/filterpermanentbookings', (req, res, next) => {

  const params = {
    username : req.body.username,
    plan : req.body.plan,
    email : req.body.email,
    startdatefrom : req.body.startdatefrom,
    startdateto : req.body.startdateto,
    enddatefrom: req.body.enddatefrom,
    enddateto: req.body.enddateto,
    centers : req.body.centers
  }
  

  PermanentBook.filterByParams( params, (err, booking) => {
    
    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        PermanentBookings : booking
      });
   }
  });
});


// approve permanent booking
router.post('/approvepermanentbooking', (req, res, next) => {
  const book_id = req.body.book_id;
  const book_status = req.body.book_status;
 
  PermanentBook.approveBooking(book_id, book_status, (err) => {
    if(err){
    res.json({success: false, msg:'Failed to approve'});
    } else {
    res.json({success: true, status: book_status, msg:'Approved!'});
    }
  });
});

//delete permanent booking 
router.post('/deletepermanentbooking', (req, res, next) => {
  const book_id = req.body.book_id;
 
  PermanentBook.deleteBooking(book_id, (err) => {
    if(err){
    res.json({success: false, msg:'Failed to delete'});
    } else {
    res.json({success: true, msg:'Deleted!'});
    }
  });
});



// Get All Hotdesk Bookings
router.post('/gethotdeskbooking', (req, res, next) => {

  const centers = req.body.centers;

  Hotdesking.getAllBookings( centers, (err, booking) => {
    
    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        HotdeskBookings : booking
      });
   }
  });
});

// filter hotdesk booking
router.post('/filterhotdeskbooking', (req, res, next) => {

  const params = {
    username : req.body.username,
    plan : req.body.plan,
    email : req.body.email,
    startdatefrom : req.body.startdatefrom,
    startdateto : req.body.startdateto,
    enddatefrom: req.body.enddatefrom,
    enddateto: req.body.enddateto,
    centers: req.body.centers
  }

  Hotdesking.filterByParams( params, (err, booking) => {
    
    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        HotdeskBookings : booking
      });
   }
  });
});

//approve hotdesk
router.post('/approvehotdeskbooking', (req, res, next) => {
  
  const book_id = req.body.book_id;
  const book_status = req.body.book_status;
 
  Hotdesking.approveBooking(book_id, book_status, (err) => {
    if(err){
    res.json({success: false, msg:'Failed to approve'});
    } else {
    res.json({success: true, status: book_status ,msg:'Approved!'});
    }
  });
});

//delete hotdesk
router.post('/deletehotdeskbooking', (req, res, next) => {
  const book_id = req.body.book_id;
 
  Hotdesking.deleteBooking(book_id, (err) => {
    if(err){
    res.json({success: false, msg:'Failed to delete'});
    } else {
    res.json({success: true, msg:'Deleted!'});
    }
  });
});


//Get user specific Permanent Booking 
router.post('/getuserpermanentbooking', (req, res, next) => {

  PermanentBook.getBookingByUserData(req.body.username, req.body.email, (err, booking) => {

    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        PermanentBookings: booking
      });
   }
  });
});

// Get user specifc hotdesk booking
router.post('/getuserhotdeskbooking', (req, res, next) => {

  Hotdesking.getBookingByUserData(req.body.username, req.body.email, (err, booking) => {

    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        HotdeskBookings: booking
      });
   }
  });
});

// Get user specific meeting room booking
router.post('/getmeetingroombookingsbyuser', (req, res, next) => {

  MeetingRoom.getBookingByUserData(req.body.username, req.body.email, (err, booking) => {

    if (err) throw err;
    
    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        MeetingroomBookings: booking
      });
   }
  });
});


// Get user normal Bookings
router.post('/booking', (req, res, next) => {

  Booking.getBookingByUserData(req.body.username, req.body.email, (err, booking) => {

    if (err) throw err;

    if (!booking) {
      return res.json({ success: false, msg: 'Booking not found' });
    } else {
      res.json({
        success: true,
        Bookings: booking
      });
   }
  });
});

// Booking Data
router.get('/bookingdata', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.post('/initiatepayment', (req, res, next) => {
  paymentHash.generate(req.body, (result) =>{
    // req.body.hash=hashData.hash;
    res.json({
      success: true,
      result: result
    });
  });
  //console.log("CALLED initiatepayment ON BACKEND");
});

module.exports = router;