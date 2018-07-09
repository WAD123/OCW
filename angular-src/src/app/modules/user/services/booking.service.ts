import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { globals } from '../helpers/globals';

@Injectable()
export class BookingService {
    constructor(private http: Http) {
    }

    public bookSpace(data) {
        return this.http.post(globals.baseUrl + '/users/login', data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public register(data) {
        return this.http.post(globals.baseUrl + '/users/register', data).map(res => res.text().length > 0 ? res.json() : null);
    }

    public getDetails() {
        return this.http.get(globals.baseUrl + '/inventories/getdetails').map(res => res.text().length > 0 ? res.json() : null);
    }

    public saveHotedeskBooking(formValues) {
        let postData = {
            "name": formValues['username'],
            "username": formValues['username'],
            "email": formValues['email'],
            "plan": formValues['packageType'],
            "startdate": formValues['startDate'],
            "enddate": formValues['startDate'].setDate(formValues['startDate'].getDate() + 3),
            "seats": formValues['seats'],
            "center": formValues['center'],
            "amount": formValues['amount'],
            "amountBreakdown": formValues['amount']
        };
        // console.log(postData)
        return this.http.post(globals.baseUrl + '/bookings/hotdesking', postData).map(res => res.text().length > 0 ? res.json() : null);
    }

    public savePermanentBooking(formValues) {
        let postData = {
            "name": formValues['username'],
            "username": formValues['username'],
            "email": formValues['email'],
            "plan": formValues['packageType'],
            "startdate": formValues['startDate'],
            "enddate": formValues['startDate'].setDate(formValues['startDate'].getDate() + 3),
            "seats": formValues['seats'],
            "seatsNumber": formValues['seats'],
            "center": formValues['center'],
            "amount": formValues['amount'],
            "amountBreakdown": formValues['amount']
        };
        return this.http.post(globals.baseUrl + '/bookings/permanentbook', postData).map(res => res.text().length > 0 ? res.json() : null);
    }

    public bookRoom(data){
        return this.http.post(globals.baseUrl+'/bookings/meetingroom',data).map(res => res.text().length > 0 ? res.json() : null);
    }
    public getInventories(){
        return this.http.get(globals.baseUrl+'/inventories/getinfo').map(res => res.text().length > 0 ? res.json() : null);
    }

    public getHotdeskBookings() {
        let data = {
            "username": localStorage.getItem("username"),
            "email": localStorage.getItem("email")
        };
        return this.http.post(globals.baseUrl + '/bookings/getuserhotdeskbooking', data).map(res => res.text().length > 0 ? res.json() : null);
    }

    public getPermanentBookings() {
        let data = {
            "username": localStorage.getItem("username"),
            "email": localStorage.getItem("email")
        };
        return this.http.post(globals.baseUrl + '/bookings/getuserpermanentbooking', data).map(res => res.text().length > 0 ? res.json() : null);
    }

    public getMeetingRoomBookings() {
        let data = {
            "username": localStorage.getItem("username"),
            "email": localStorage.getItem("email")
        };
        return this.http.post(globals.baseUrl + '/bookings/getmeetingroombookingsbyuser', data).map(res => res.text().length > 0 ? res.json() : null);
    }

}
