import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';
import { CommonService } from '../../services/common.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbookings',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css'],
  providers: [BookingService, CommonService]
})
export class BookRoomComponent implements OnInit {
  keyMapping: any = { 'MTR': "meetingroom_price", 'TR': "trainingroom_price", 'PVTR': "privateroom_price", "TLRMR": "tailormaderoom_price" }
  locations: any = [];
  todayDate: any = new Date();
  roomTypes: any = [];
  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    // margin: 9,
    step: 1,
    start: [10, 12],
    pageSteps: 13,
    range: {
      min: 9,
      max: 21
    },
    pips: {
      mode: 'count',
      density: 13,
      values: 13,
      stepped: true
    }
  };
  bookRoomForm: FormGroup;

  inventoryData: any;

  users: any = [];
  amount: any = 0;
  constructor(fb: FormBuilder, private flashMessage: FlashMessagesService, private bookingService: BookingService, private commonService: CommonService, private router: Router) {
    this.bookRoomForm = fb.group({

      'location': ['', [Validators.required]],
      'date': [new Date(), Validators.required],
      'plan': ['', Validators.required],
      'user': ['', Validators.required],
      'timeRange': [[9, 11], Validators.required]
    })
  }

  ngOnInit() {
    this.bookingService.getInventories().subscribe(res => {
      if (res && res.success) {
        this.inventoryData = res.inventory;

      }


    })
    this.bookingService.getUsers().subscribe(res => {
      if (res && res.success) {
        this.users = res.users;

      }


    })
    this.locations = this.commonService.getLocations('');
    this.roomTypes = this.commonService.getRoomPackages();
  }

  submitForm(formValues): void {

    let values = { ...formValues, amount: this.amount };
    values.startdate = new Date(formValues.date.setHours(formValues.timeRange[0], 0, 0, 0))
    values.enddate = new Date(formValues.date.setHours(formValues.timeRange[1], 0, 0, 0))
    let user = this.users.find(x => x._id == values.user);
    values.username = user.username;
    values.email = user.email;
    values.center = values.location;

    if(values.startdate.getDate() +"-"+values.startdate.getMonth()+"-"+values.startdate.getFullYear() == new Date().getDate() +"-"+new Date().getMonth()+"-"+new Date().getFullYear() && (new Date()).getHours() >= values.startdate.getHours()) {
      this.flashMessage.show("Start time must be ahead than current time.", { cssClass: 'alert-danger', timeout: 3000 });
    } else if(values.startdate.getHours() == values.enddate.getHours()) {
      this.flashMessage.show("There must be atleast one hour difference between start time and end time.", { cssClass: 'alert-danger', timeout: 3000 });
    } else {
      this.bookingService.bookRoom(values).subscribe(res => {

        if (res.success) {
          this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 3000 });
          setTimeout(() => {
            this.router.navigate(['/admin/managebookings']);
          }, 1000);
        } else {
          this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    }

  }

  calcAmount(): void {
    let hrs = this.bookRoomForm.controls['timeRange'].value[1] - this.bookRoomForm.controls['timeRange'].value[0];
    this.amount = hrs * (this.inventoryData.find(x => x.center == this.bookRoomForm.controls['location'].value)[this.keyMapping[this.bookRoomForm.controls['plan'].value]].price)
    return this.amount;
  }

}
