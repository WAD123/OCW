import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import {fadeInDashboard, listAnimation} from '../../../animations/index';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  animations: [fadeInDashboard, listAnimation],
  host: { '[@fadeInDashboard]': '' },
})
export class BookingsComponent implements OnInit {

  username: String;
  email: String;
  bookings:any[]=[];
  userData:any;
  listInView:String="";
  waitingForDb:Boolean=true;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getprofiledata().then((userData) => {
      
      // this.authService.getBookings(userData).subscribe(bookingdata => {
      //   this.bookings = bookingdata.Bookings;
      // });
      this.userData=userData;
      // console.log(userData);
      this.getHotdeskBookings();
    });
  }
  generateCSV(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      headers: ["_id","Name", "username", "email", "package", "", "", "Total Seats", "Amount Paid", "Approved", "Center"]
    };
    new Angular2Csv(this.bookings, "Bookings_csv", options);
  }

  getHotdeskBookings(){
    this.waitingForDb=true;
    if(this.listInView=='hotdesk'){
      return;
    }
    this.bookings=[];
    if(!this.userData.username){
      this.getprofiledata().then((userData) => {
        this.userData=userData;
        this.getHotdeskBookings();
        return;
      });
    }
    this.listInView='hotdesk';
    this.authService.getUserHotdeskBookings(this.userData).subscribe( data => {
      for (let booking of data.HotdeskBookings) {
          
          booking.startdate =  booking.startdate.slice(0, booking.startdate.indexOf("T"));
          booking.enddate =  booking.enddate.slice(0, booking.enddate.indexOf("T"));
          
          if (booking.plan == "1DP") {
            booking.plan = "One day Pass";
          } else if (booking.plan == "4DP") {
            booking.plan = "4 days Pass";
          } else if (booking.plan == "10DP") {
            booking.plan = "10 days Pass";
          }
        }
      this.bookings = data.HotdeskBookings;
      this.waitingForDb=false;
    });
  }
  getPermanentBookings(){
    this.waitingForDb=true;
    if(this.listInView=='permanent'){
      return;
    }
    this.bookings=[];
    if(!this.userData.username){
      this.getprofiledata().then((userData) => {
        this.userData=userData;
        this.getPermanentBookings();
        return;
      });
    }
    this.listInView='permanent';
    this.authService.getUserPermanentBooking(this.userData).subscribe(bookingdata => {
      for (let booking of bookingdata.PermanentBookings) {

          booking.startdate = booking.startdate.slice(0, booking.startdate.indexOf("T"));
          booking.enddate = booking.enddate.slice(0, booking.enddate.indexOf("T"));

          if (booking.plan == "18DP") {
            booking.plan = "18 day Pass";
          } else if (booking.plan == "30DP") {
            booking.plan = "30 days Pass";
          }
        }
      this.bookings = bookingdata.PermanentBookings;
      this.waitingForDb=false;
  });
  }
  getMeetingRoomBookings(){
    this.waitingForDb=true;
    if(this.listInView=='meeting'){
      return;
    }
    this.bookings=[];
    if(!this.userData.username){
      this.getprofiledata().then((userData) => {
        this.userData=userData;
        this.getMeetingRoomBookings();
        return;
      });
    }
    this.listInView='meeting';
    this.authService.getUserMeetingRoomBookings(this.userData).subscribe( bookingdata => {
      this.bookings = bookingdata.MeetingroomBookings;
      this.waitingForDb=false;
    // console.log(this.meetingroombookings);
    });
  }
  getprofiledata() {
    return new Promise((resolve) => {
      this.authService.getProfile().subscribe(profile => {
        this.username = profile.user.username;
        this.email = profile.user.email;
        const userData = {
          username: this.username,
          email: this.email
        }
        resolve(userData);
      },
        err => {
          console.log("ERROR" + err);
          return false;
        });
    });
  }

}