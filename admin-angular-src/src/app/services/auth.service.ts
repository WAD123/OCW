import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import * as globals from '../helpers/global';
@Injectable()
export class AuthService {
  authToken: any;
  adminuser: any;
  
  constructor(private http: Http) { }

  getGlobalDesignations() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(globals.Baseurl+'adminusers/getdesignations', { headers: headers })
      .map(res => res.json());
    }

  getInfo() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(globals.Baseurl+'inventories/getinfo', { headers: headers })
      .map(res => res.json());
  }
  
  updateInventory(inventory) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'inventories/updateinventory', inventory, { headers: headers })
      .map(res => res.json());
  }

  validateAdminUsername(username) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/checkusername', username, { headers: headers })
      .map(res => res.json());
  }

  registerUser(adminuser) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/register', adminuser, { headers: headers })
      .map(res => res.json());
  }

  //update admin 
  updateUser(adminuser) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/updateadmin', adminuser, { headers: headers })
      .map(res => res.json());
  }

  // delete admin user
  deleteUser(id) { 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/deleteadmin', id, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(adminuser) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/authenticate', adminuser, { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, adminuser) {
    if(token)
      localStorage.setItem('id_token', token);
    if(adminuser)
      localStorage.setItem('adminuser', JSON.stringify(adminuser));
    this.authToken = token;
    this.adminuser = adminuser;
  }

  // return other admins (below level)
  getOtherAdmins(adminLevel) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/getotheradmins', adminLevel, { headers: headers })
      .map(res => res.json());
  }

  //get all hotdesk bookings 
  getHotdeskBookings(centers) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/gethotdeskbooking', centers, { headers: headers })
      .map(res => res.json());
  }

  // filter hotdesk
  filterHotdeskBookings(params) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/filterhotdeskbooking', params,  { headers: headers })
      .map(res => res.json());
  }

  // filter customers
  filterUsers(params) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(globals.Baseurl+'users/filterusers', params, {headers : headers})
    .map(res => res.json());
  }

  // approve hotdesk 
  approveHotdeskBooking(bookid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/approvehotdeskbooking', bookid, { headers: headers })
      .map(res => res.json());
  }
  
  // delete hotdesk
  deleteHotdeskBooking(bookid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/deletehotdeskbooking', bookid, { headers: headers })
      .map(res => res.json());
  }
  
  //get all permanent bookings
  getPermanentBookings(centers) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/getpermanentbooking', centers, { headers: headers })
      .map(res => res.json());
  }

  // get a permanent booking by id 
  getPermanentBookingById(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/getpermanentbookingbyid', id, { headers: headers })
      .map(res => res.json());
  }

  // get a hotdesk booking by id
  getHotdeskBookingbyId(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/gethotdeskbookingbyid', id, {headers:headers})
      .map(res => res.json());
  }

  // get a meeting room booking by id 
  getmtrBookingById(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/getmtrbookingbyid', id, {headers: headers})
      .map( res => res.json());
  }

  // move to trash
  moveToTrash(item) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/movetotrash', item, {headers: headers})
    .map(res => res.json());
  }

  // filter permanent bookings
  filterPermanentBookings(params) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/filterpermanentbookings', params,  { headers: headers })
      .map(res => res.json());
  }

  // approve permanent
  approvePermanentBooking(bookid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/approvepermanentbooking', bookid, { headers: headers })
      .map(res => res.json());
  }
  
  // delete permanent
  deletePermanentBooking(bookid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/deletepermanentbooking', bookid, { headers: headers })
      .map(res => res.json());
  }
  
  // get all mtr bookings
  getMeetingroomBookings(centers) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/getallmeetingroombookings', centers, { headers: headers })
      .map(res => res.json());
  }

  // Filter meeting room bookings 
  filterMeetingroomBookings(params) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/filtermeetingroombookings', params, { headers: headers })
      .map(res => res.json());
  }

  // approve mtr
  approveMeetingroomBooking(bookid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/approvemeetingroombooking', bookid, { headers: headers })
      .map(res => res.json());
  }
  
  // delete mtr
  deleteMeetingroomBookings(bookid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'bookings/deletemeetingroombooking', bookid, { headers: headers })
      .map(res => res.json());
  }

  changePassword(adminuser) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/changepassword', adminuser, { headers: headers })
      .map(res => res.json());
  }
  
  getProfile(id) {
    console.log("GET PROFILE CALLED!");
    console.log(globals.Baseurl+'adminusers/adminprofile')
    console.log(id);
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post(globals.Baseurl+'adminusers/adminprofile', id, { headers: headers })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    let tmpLocalData = localStorage.getItem("adminuser")&&localStorage.getItem("adminuser")!="undefined" ?JSON.parse(localStorage.getItem("adminuser")):undefined;
    if (this.adminuser == null) {
      if (tmpLocalData) {
        this.adminuser = tmpLocalData.username;
        this.authToken = localStorage.getItem("id_token") &&localStorage.getItem("id_token")!="undefined"? localStorage.getItem("id_token"):'';
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }

  logout() {
    this.authToken = null;
    this.adminuser = null;
    localStorage.clear();
  }
  
}