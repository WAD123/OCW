import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { CommonService } from '../../services/common.service';
import { KYCService } from '../../services/kyc.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-book-space',
    templateUrl: './book-space.component.html',
    styleUrls: ['./book-space.component.css'],
    providers: [BookingService, CommonService, KYCService]
})

export class BookSpaceComponent implements OnInit {

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
    packageMappings:any = {'_1DP':1,'_4DP':4,'_10DP':10,'_18DP':18,'_30DP':30,'_40DP':40};
    msg: String = '';
    success: boolean = false;
    error: boolean = false;
    routingString: string = "/user/bookSpace";

    constructor(fb: FormBuilder, private bookingService: BookingService, private commonService: CommonService, private router: Router, private kycService: KYCService) {
        this.bookSpaceForm = fb.group({
            'location': ['', [Validators.required]],
            'startDate': [this.todayDate, Validators.required],
            'packageType': ['', Validators.required],
            'subscription': ['', Validators.required],
            'seats': ['', [Validators.required,Validators.min(1)]]
        });
    }

    ngOnInit() {
        this.checkKYC();
        this.setInitialValues();
        this.getInventoryData();
    }

    checkKYC(): void {
        this.kycService.getUserInfo(localStorage.getItem('userId')).subscribe(res => {
            console.log(res)
            if(res.success && (!res.user.addressProofPath || !res.user.addressProofType || !res.user.identityProofPath || !res.user.identityProofType || !res.user.photoPath)) {
                this.error = true;
                this.msg = "Your KYC information is not up-to-date. Please complete your KYC uploads before booking!";
                this.routingString = "/user/accountSettings";
            }
		})
    }

    setInitialValues(): void {
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
            // console.log(this.inventoryArray);
        });
    }

    calcAmount(): any {
        // inventory detail by center
        let invData = this.inventoryArray.find(x=> x.center == this.commonService.getLocationById(this.bookSpaceForm.controls["location"].value).name)
        // package price
        let price = this.bookSpaceForm.controls["packageType"].value == "_1DP" || this.bookSpaceForm.controls["packageType"].value == "_4DP" || this.bookSpaceForm.controls["packageType"].value == "_10DP" ? invData.hotdesk_price[this.bookSpaceForm.controls["packageType"].value] : invData.permanentbook_price[this.bookSpaceForm.controls["packageType"].value];
        let startDate = new Date(this.bookSpaceForm.controls["startDate"].value);
        this.endDate = new Date(startDate.setDate(startDate.getDate()+this.packageMappings[this.bookSpaceForm.controls["packageType"].value]));
        this.endDate = new Date(this.endDate.setMonth(this.endDate.getMonth()-1+parseInt(this.bookSpaceForm.controls["subscription"].value)))
        // console.log(this.endDate);
        return this.totalAmount = (price * this.bookSpaceForm.controls["subscription"].value * this.bookSpaceForm.controls["seats"].value);
    }

    submitForm(formValues): void {
        if (this.bookSpaceForm.valid) {
            if (formValues['startDate'] <= this.todayDate) {
                this.error = true;
                this.msg = "Start date must be greater than today's date.";
                this.routingString = "/user/bookSpace";
            }
            else {
                formValues["packageType"] == "_1DP" || formValues["packageType"] == "_4DP" || formValues["packageType"] == "_10DP" ? this.saveHotedeskBooking(formValues) : this.savePermanentBooking(formValues);
            }
        }
    }

    saveHotedeskBooking(formValues): void {
        formValues = {...formValues,username:localStorage.getItem('username'),email:localStorage.getItem('email'),
              amount:this.totalAmount,center:this.commonService.getLocationById(this.bookSpaceForm.controls["location"].value).name};
        // console.log("saveHotedeskBooking", formValues)
        this.bookingService.saveHotedeskBooking(formValues).subscribe(res => {
            if (res.success) {
				this.success = true;
                this.msg =res.msg;
                this.routingString = "/user/myBookings";
			}
			else {
				this.error = true;
                this.msg = res.msg;
                this.routingString = "/user/bookSpace";
			}
        });
    }

    savePermanentBooking(formValues): void {
        formValues = {...formValues,username:localStorage.getItem('username'),email:localStorage.getItem('email'),
              amount:this.totalAmount,center:this.commonService.getLocationById(this.bookSpaceForm.controls["location"].value).name};
        // console.log("savePermanentBooking", formValues)
        this.bookingService.savePermanentBooking(formValues).subscribe(res => {
            if (res.success) {
				this.success = true;
                this.msg =res.msg;
                this.routingString = "/user/myBookings";
			}
			else {
				this.error = true;
                this.msg = res.msg;
                this.routingString = "/user/bookSpace";
			}
        });
    }

    closeModal() {
        this.success = false;
        this.error = false;
        this.router.navigate([this.routingString]);
    }

    checkNegativeValue(value: any): void {
        // value <=0 ? console.log("-ve") : console.log("+ve")
        if(value <=0) {
            this.error = true;
            this.msg = "Number of seats must be greater than 0";
            this.routingString = "/user/bookSpace";
        }
    }

}
