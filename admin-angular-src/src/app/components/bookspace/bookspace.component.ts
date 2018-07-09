import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';
import { CommonService } from '../../services/common.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bookspace',
    templateUrl: './bookspace.component.html',
    styleUrls: ['./bookspace.component.css'],
    providers: [BookingService, CommonService]
})
export class BookspaceComponent implements OnInit {

    locations: any = [];
    spaceType: any = [];
    hotDeskPackages: any = [];
    permanentPackages: any = [];
    subscriptionDuration: any = [];
    bookSpaceForm: FormGroup;
    datePickOpen: boolean = false;
    spaceTypeValue: any = "";
    packageTypeValue: any = "";
    subscriptionValue: any = "";
    seatsValue: any = "";
    locationValue: any = "";
    inventoryArray: any = [];
    totalAmount: number = 0;
    packages: any = [];
    users: any = [];
    todayDate: any = new Date();
    endDate: any = new Date();
    packageMappings: any = { '_1DP': 1, '_4DP': 4, '_10DP': 10, '_18DP': 18, '_30DP': 30, '_40DP': 40 };

    constructor(fb: FormBuilder, private bookingService: BookingService, private flashMessage: FlashMessagesService, private commonService: CommonService, private router: Router) {
        this.bookSpaceForm = fb.group({
            'user': [''],
            'location': ['', [Validators.required]],
            // 'spaceType': ['', Validators.required],
            'startDate': [new Date(), Validators.required],
            //   'endDate': ['', Validators.required],
            'packageType': ['', Validators.required],
            'subscription': ['', Validators.required],
            'seats': ['', [Validators.required, Validators.min(1)]]
        });
    }

    ngOnInit() {
        this.setInitialValues();
        this.getInventoryData();
    }

    setInitialValues(): void {
        // let self = this;
        this.bookingService.getUsers().subscribe(res => {
            if (res && res.success) {
                this.users = res.users;
            }
        });
        // this.users = this.userService.getAllUsers().subscribe(val => console.log(val));
        this.subscriptionDuration = Array(12).fill(12).map((x, i) => { return i + 1 }); // [0,1,2,3,4]
        this.spaceType = this.commonService.getSpaceType().map((x, i) => { return { "code": i + 1, "value": x } });
        this.locations = this.commonService.getLocations('').map((x, i) => { return { "code": i + 1, "value": x } });
        this.hotDeskPackages = this.commonService.getHotDeskPackages();
        this.permanentPackages = this.commonService.getPermanentPackages();
        this.packages = this.commonService.getSpacePackages();
    }

    getInventoryData(): void {
        this.bookingService.getDetails().subscribe(res => {
            this.inventoryArray = res.success ? res.plan_details : [];
            // console.log(this.inventoryArray)
        });
    }

    calcAmount(): any {
        // inventory detail by center
        let invData = this.inventoryArray.find(x => x.center == this.bookSpaceForm.controls["location"].value);
        // package price
        let price = this.bookSpaceForm.controls["packageType"].value == "_1DP" || this.bookSpaceForm.controls["packageType"].value == "_4DP" || this.bookSpaceForm.controls["packageType"].value == "_10DP" ? invData.hotdesk_price[this.bookSpaceForm.controls["packageType"].value] : invData.permanentbook_price[this.bookSpaceForm.controls["packageType"].value];

        let startDate = new Date(this.bookSpaceForm.controls["startDate"].value);
        this.endDate = new Date(startDate.setDate(startDate.getDate() + this.packageMappings[this.bookSpaceForm.controls["packageType"].value]));
        this.endDate = new Date(this.endDate.setMonth(this.endDate.getMonth() - 1 + parseInt(this.bookSpaceForm.controls["subscription"].value)))
        console.log(this.endDate);

        return this.totalAmount = (price * this.bookSpaceForm.controls["subscription"].value * this.bookSpaceForm.controls["seats"].value);
    }

    submitForm(formValues): void {
        if (this.bookSpaceForm.valid) {
            if (formValues['startDate'] <= this.todayDate) {
                // alert("Start date must be greater than today's date.")
                this.flashMessage.show('Start date must be greater than today\'s date.', { cssClass: 'alert-danger', timeout: 3000 });
            } else {
                formValues["packageType"] == "_1DP" || formValues["packageType"] == "_4DP" || formValues["packageType"] == "_10DP" ? this.saveHotedeskBooking(formValues) : this.savePermanentBooking(formValues);
            }
        }
    }

    saveHotedeskBooking(formValues): void {
        let user = this.users.find(x => x._id == formValues.user);
        formValues = {
            ...formValues, username: user.username, email: user.email, amount: this.totalAmount
        };
        // console.log("saveHotedeskBooking",formValues)
        this.bookingService.saveHotedeskBooking(formValues).subscribe(res => {
            if (res.success) {
                this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 3000 });
                setTimeout(() => {
                    this.router.navigate(['/admin/managebookings']);
                }, 1000);
            } else {
                this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }

    savePermanentBooking(formValues): void {
        let user = this.users.find(x => x._id == formValues.user);
        formValues = {
            ...formValues, username: user.username, email: user.email, amount: this.totalAmount
        };
        // console.log("savePermanentBooking", formValues)
        this.bookingService.savePermanentBooking(formValues).subscribe(res => {
            if (res.success) {
                this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 3000 });
                setTimeout(() => {
                    this.router.navigate(['/admin/managebookings']);
                }, 1000);
            } else {
                this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }

    checkNegativeValue(value: any): void {
        // value <=0 ? console.log("-ve") : console.log("+ve")
        if (value <= 0) {
            this.flashMessage.show("Number of seats must be greater than 0", { cssClass: 'alert-danger', timeout: 3000 });
        }
    }

}
