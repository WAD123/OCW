import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Baseurl } from '../helpers/global';

@Injectable()
export class BookingService {
    constructor(private http: Http) {
    }

    public bookSpace(data) {
        return this.http.post(Baseurl + 'users/login', data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public getUsers() {
        console.log(Baseurl + 'users/getinfo')
        return this.http.get(Baseurl + 'users/getinfo').map(res => res.text().length > 0 ? res.json() : null);
    }
    public getDetails() {
        return this.http.get(Baseurl + 'inventories/getdetails').map(res => res.text().length > 0 ? res.json() : null);
    }


    public saveHotedeskBooking(formValues) {
        let postData = {
            "name": formValues['username'],
            "username": formValues['username'],
            "email": formValues['email'],
            "plan": formValues['packageType'],
            "startdate": formValues['startDate'],
            "enddate": formValues['startDate'],
            "seats": formValues['seats'],
            "center": formValues['location'],
            "amount": formValues['amount'],
            "amountBreakdown": formValues['amount'],
            "subscriptionPeriod":formValues['subscription']
        };
        // console.log(postData);
        return this.http.post(Baseurl + 'bookings/hotdesking', postData).map(res => res.text().length > 0 ? res.json() : null);
    }

    public savePermanentBooking(formValues) {
        let postData = {
            "name": formValues['username'],
            "username": formValues['username'],
            "email": formValues['email'],
            "plan": formValues['packageType'],
            "startdate": formValues['startDate'],
            "enddate": formValues['startDate'],
            "seats": formValues['seats'],
            "seatsNumber": formValues['seats'],
            "center": formValues['location'],
            "amount": formValues['amount'],
            "amountBreakdown": formValues['amount']
        };
        // console.log(postData);
        return this.http.post(Baseurl + 'bookings/permanentbook', postData).map(res => res.text().length > 0 ? res.json() : null);
    }

    public bookRoom(data){
        return this.http.post(Baseurl+'bookings/meetingroom',data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public getInventories(){
        return this.http.get(Baseurl+'inventories/getinfo').map(res => res.text().length > 0 ? res.json() : null);
    }

    public getHotdeskBookings() {
        let data = {
            "username": localStorage.getItem("username"),
            "email": localStorage.getItem("email")
        };
        return this.http.post(Baseurl + '/bookings/getuserhotdeskbooking', data).map(res => res.text().length > 0 ? res.json() : null);
    }

    public getPermanentBookings() {
        let data = {
            "username": localStorage.getItem("username"),
            "email": localStorage.getItem("email")
        };
        return this.http.post(Baseurl + '/bookings/getuserpermanentbooking', data).map(res => res.text().length > 0 ? res.json() : null);
    }

    public getMeetingRoomBookings() {
        let data = {
            "username": localStorage.getItem("username"),
            "email": localStorage.getItem("email")
        };
        return this.http.post(Baseurl + '/bookings/getmeetingroombookingsbyuser', data).map(res => res.text().length > 0 ? res.json() : null);
    }

}
