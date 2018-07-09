import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  slot: any;
  
  constructor(
    private http: Http,
    private jwtHelper: JwtHelper = new JwtHelper()
  ) { }

  getDetails() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('inventories/getdetails', { headers: headers })
      .map(res => res.json());
  }

  validateUsername(username) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/checkusername', username, { headers: headers })
      .map(res => res.json());
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, { headers: headers })
      .map(res => res.json());
  }

  updateProfile(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/updateprofile', user, { headers: headers })
      .map(res => res.json());
  }

  changePassword(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/changepassword', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', { headers: headers })
      .map(res => res.json());
  }

  getBookings(userData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bookings/booking', userData, { headers: headers })
      .map(res => res.json());
  }

  //get all permanent bookings
  getPermanentBookings() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('bookings/getpermanentbooking', { headers: headers })
      .map(res => res.json());
  }

  //get all center-wise permanent bookings
  getCenterPermanentBookings(center) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bookings/getcenterpermanentbooking', center, { headers: headers })
      .map(res => res.json());
  }

  getUserPermanentBooking(slotData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bookings/getuserpermanentbooking', slotData, { headers: headers })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  bookSlot(slotData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bookings/bookslot', slotData, { headers: headers })
      .map(res => res.json());
  }

  hotdesking(slotData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bookings/hotdesking', slotData, { headers: headers })
      .map(res => res.json());
  }

  // Get user speific hotdesk bookings
  getUserHotdeskBookings(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bookings/getuserhotdeskbooking', user, { headers: headers })
      .map(res => res.json());
  }

  permanentbook(slotData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bookings/permanentbook', slotData, { headers: headers })
          .map(res => res.json());
  }

  checkmeetingroombooking(data) {
    // console.log("CALLED");

    return new Promise( (resolve) => {
      
      this.getMeetingRoomBookings(data).subscribe(currentmrbookings => {
        let bookedTime = [];
        // console.log(currentmrbookings);
        for(let eachmrbooking of currentmrbookings.MeetingRoomBookings) {
          let start=new Date(eachmrbooking.startdate).getHours();
          let end=new Date(eachmrbooking.enddate).getHours();
          for(let i=start;i<end;i++){
            bookedTime.push(i);
          }
        }
      resolve(bookedTime);
      });
    }); 

  }

  // for greying out seats in frontend
  checkpermanentbooking(slotData) {
    
    return new Promise((resolve) => {

      const centerData = {
        center : slotData.center
      }

      this.getCenterPermanentBookings(centerData).subscribe(currentPermanentBookings => {

        let bookedSeats = [];
        let requestedStartDate = new Date(slotData.startdate);
        let requestedEndDate = new Date(slotData.enddate);

        for (let cpb of currentPermanentBookings.PermanentBookings) {

          let bookedStartDate = new Date(cpb.startdate);
          let bookedEndDate = new Date(cpb.enddate);
          
          for (let bookedseat of cpb.seatsNumber) {
            if (requestedEndDate < bookedStartDate || requestedStartDate > bookedEndDate) {
            } else {
              bookedSeats.push(Number(bookedseat));
            }
          }
        }
        var uniqueBookedSeats = bookedSeats.filter(function (elem, index, self) {
          return index == self.indexOf(elem);
        });
        resolve(uniqueBookedSeats);
      });
    });
  }

  meetingroom(slotData){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('bookings/meetingroom', slotData,{headers: headers})
      .map(res => res.json()); 
  }

  // meeting room bookings by date
  getMeetingRoomBookings(data) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('bookings/getmeetingroombookingsbydate', data, {headers: headers})
      .map(res => res.json()); 
  }

  // meeting room bookings by date
  getUserMeetingRoomBookings(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('bookings/getmeetingroombookingsbyuser', user, {headers: headers})
      .map(res => res.json()); 
  }

  virtualoffice(slotData){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('bookings/virtualoffice', slotData,{headers: headers})
      .map(res => res.json()); 
  }
  
  storeBookData(username, slot){
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('slot', JSON.stringify(slot));
    this.slot = slot;
  }

  loggedIn() {
    let tmpLocalData = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) {
      if (tmpLocalData) {
        this.user = tmpLocalData.username;
        return tokenNotExpired("id_token");
      }
      else {
        return tokenNotExpired("id_token");
      }
    }
    else {
      return true;
    }
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  proceedWithPayment(paymentFields){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('bookings/initiatepayment', paymentFields,{headers: headers})
      .map(res => res.json()); 
  }
  addActivity(activity_content){
    // let localUserData=JSON.parse(localStorage.getItem("user"));
    const newActivityData = {
      // user_id: localUserData.id,
      username: JSON.parse(localStorage.getItem("user")).username,
      timestamp: new Date().toISOString(),
      content: activity_content
    }
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('activities/addactivity', newActivityData,{headers: headers})
      .map(res => res.json()); 
  }
  getActivities(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('activities/getactivities', {username: JSON.parse(localStorage.getItem("user")).username}, {headers: headers})
      .map(res => res.json()); 
  }
}