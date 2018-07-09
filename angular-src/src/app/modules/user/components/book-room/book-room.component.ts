import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { CommonService } from '../../services/common.service';
import { KYCService } from '../../services/kyc.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css'],
  providers: [BookingService, CommonService, KYCService]
})
export class BookRoomComponent implements OnInit {

  keyMapping: any = { 'MTR': "meetingroom_price", 'TR': "trainingroom_price", 'PVTR': "privateroom_price", "TLRMR": "tailormaderoom_price" }
  locations: any = [];
  packages: any = [];
  bookRoomForm: FormGroup;
  datePickOpen: boolean = false;
  inventoryData: any;
  amenities: any = [];
  startTime: any;
  endTime: any;
  amount: any = 0;
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
  msg: String = '';
  success: boolean = false;
  error: boolean = false;
  routingString: string = "/user/bookRoom";

  constructor(fb: FormBuilder, private bookingService: BookingService, private commonService: CommonService, private router: Router, private kycService: KYCService) {
    this.bookRoomForm = fb.group({

      'location': ['', [Validators.required]],
      'date': [new Date(), Validators.required],
      'packageType': ['', Validators.required],
      'timeRange': [[9, 10], Validators.required]
      // 'rooms':['', Validators.required],
      // lcdAmenity:[],
      // projectorAmenity:[],
      // otherAmenity:[]
    })
  }
  closeModal() {
    this.success = false;
    this.error = false;
    this.router.navigate([this.routingString]);
  }
  getAmount() {
    let hrs = this.bookRoomForm.controls['timeRange'].value[1] - this.bookRoomForm.controls['timeRange'].value[0];
    this.amount = hrs * ((this.inventoryData.find(x => x.center == this.bookRoomForm.controls['location'].value)[this.keyMapping[this.bookRoomForm.controls['packageType'].value]].price))
    return this.amount;
  }
  ngOnInit() {
    this.checkKYC();
    this.bookingService.getInventories().subscribe(res => {
      if (res.success) {
        this.inventoryData = res.inventory;

      }
    })
    this.locations = this.commonService.getLocations('');
    this.packages = this.commonService.getRoomPackages();
  }

  checkKYC(): void {
    this.kycService.getUserInfo(localStorage.getItem('userId')).subscribe(res => {
      console.log(res)
      if (res.success && (!res.user.addressProofPath || !res.user.addressProofType || !res.user.identityProofPath || !res.user.identityProofType || !res.user.photoPath)) {
        this.error = true;
        this.msg = "Your KYC information is not up-to-date. Please complete your KYC uploads before booking!";
        this.routingString = "/user/accountSettings";
      }
    })
  }

  submitForm(formValues): void {
    this.success = false;
    this.error = false;
    // console.log(formValues,this.startTime,this.endTime)
    let values = formValues;
    // if(!this.startTime && !this.endTime){
    //   console.log('no start or end time');
    //   return;
    // }

    values.center = values.location;
    values.plan = values.packageType;
    // console.log(this.inventoryData.find(x=>x.center==values.location))
    values = {
      ...values, username: localStorage.getItem('username'), email: localStorage.getItem('email'),
      amount: this.amount
    };

    values.startdate = new Date(formValues.date.setHours(formValues.timeRange[0], 0, 0, 0))
    values.enddate = new Date(formValues.date.setHours(formValues.timeRange[1], 0, 0, 0))
    // console.log(values.startdate.getHours(), (new Date()).getHours())
    // console.log(values.startdate.getDate() +"-"+values.startdate.getMonth()+"-"+values.startdate.getFullYear(), new Date().getDate() +"-"+new Date().getMonth()+"-"+new Date().getFullYear())

    if (values.startdate.getDate() + "-" + values.startdate.getMonth() + "-" + values.startdate.getFullYear() == new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() && (new Date()).getHours() >= values.startdate.getHours()) {
      // alert("Start time must be ahead than current time.")
      this.error = true;
      this.msg = "Start time must be ahead than current time.";
      this.routingString = "/user/bookRoom";
    } else if (values.startdate.getHours() == values.enddate.getHours()) {
      // alert("There must be atleast one hour difference between start time and end time.")
      this.error = true;
      this.msg = "There must be atleast one hour difference between start time and end time.";
      this.routingString = "/user/bookRoom";
    } else {
      console.log(values);
      this.bookingService.bookRoom(values).subscribe(res => {
        if (res.success) {
          this.success = true;
          this.msg = res.msg;
          this.routingString = "/user/myBookings";
        }
        else {
          this.error = true;
          this.msg = res.msg;
          this.routingString = "/user/bookRoom";
        }
        console.log(res);
      })
    }

  }

}
