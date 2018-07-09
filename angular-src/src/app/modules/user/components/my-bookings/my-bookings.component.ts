import { Component, OnInit } from '@angular/core';

import { BookingService } from '../../services/booking.service';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-my-bookings',
    templateUrl: './my-bookings.component.html',
    styleUrls: ['./my-bookings.component.css'],
    providers: [BookingService, CommonService]
})
export class MyBookingsComponent implements OnInit {

    hotdeskBookingsArray: any = [];
    permanentBookingsArray: any = [];
    meetingRoomBookingsArray: any = [];
    subHeaderValueArray: any = [{ text: "All", count: 0, values: [] }];
    myBookingsArray: any = [];
    tabSelectStatus: boolean = true;

    constructor(private _bookingService: BookingService, private _commonService: CommonService) { }

    ngOnInit() {
        this.getHotdeskBookings();
        this.getPermanentBookings();
        this.getMeetingRoomBookings();
        // console.log(this.subHeaderValueArray);
        this.myBookingsArray = this.subHeaderValueArray.find(function (item, i) { if (0 == i) { return item; } }).values;
    }

    getHotdeskBookings(): void {
        this._bookingService.getHotdeskBookings().subscribe(res => {
            this.hotdeskBookingsArray = res.success ? res.HotdeskBookings : [];
            // console.log(this.hotdeskBookingsArray)
            this.setSubHeaderValues("Hot Desk", res.HotdeskBookings.length, res.HotdeskBookings);
        });
    }

    getPermanentBookings(): void {
        this._bookingService.getPermanentBookings().subscribe(res => {
            this.permanentBookingsArray = res.success ? res.PermanentBookings : [];
            // console.log(this.permanentBookingsArray)
            this.setSubHeaderValues("Permanent", res.PermanentBookings.length, res.PermanentBookings);
        })
    }

    getMeetingRoomBookings(): void {
        this._bookingService.getMeetingRoomBookings().subscribe(res => {
            this.meetingRoomBookingsArray = res.success ? res.MeetingroomBookings : [];
            // console.log(this.meetingRoomBookingsArray)
            this.setSubHeaderValues("Rooms", res.MeetingroomBookings.length, res.MeetingroomBookings);
        })
    }

    setSubHeaderValues(type: string, count: number, values: any): void {
        this.subHeaderValueArray[0].count = this.subHeaderValueArray[0].count + count;
        let self = this;
        values.forEach(function (item) { self.subHeaderValueArray[0].values.push(item) });
        this.subHeaderValueArray.push({ text: type, count: count, values: values });
    }

    setMyBookingsArray(index: number): void {
        this.tabSelectStatus = false;
        this.myBookingsArray = this.subHeaderValueArray.find(function (item, i) { if (index == i) { return item; } }).values;
    }

}
