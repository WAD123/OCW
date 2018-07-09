import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, ActivatedRoute} from '@angular/router';
import {fadeInDashboard, listAnimation} from '../../animations/index';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-bookspace',
  templateUrl: './bookspace.component.html',
  styleUrls: ['./bookspace.component.css']
})
export class BookspaceComponent implements OnInit {
  options: DatepickerOptions = {
    minYear: 2016,
    maxYear: 2017,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 1 // 0 - Sunday, 1 - Monday
  };

  stepNumber:Number=1;
  subStepNumber:Number=0;
  stepNumberrev:Number=0;

  user:Object;
  username: String;
  name: String;
  email: String;
  slot: String;
  bookings: Object;
  plan: String = "";
  startdate: String= new Date().toISOString();
  enddate: String;
  seats: String;
  prices:Object;
  seatsNumber: Number[];
  availableSeats: Number[];
  amount:Number=0;
  amountBreakdown:number[]=[0];
  totalMtr:Number = 1;
  totalMtrArray: Number[]=[];
  mtrid:Number = 1;
  plan_duration:Number; //minimum subscription duration
  selected_plan_duration:Number;
  centers : String[] =[];
  center : String;

  selectedPackage:String="";
  //SPECIFICALLY FOR MEETING ROOMS
  // startHour: Number;
  // startHourType: String;
  // endHour: Number;
  // endHourType: String;

  // for meeting room
  startdatetime: Date;
  enddatetime:Date;
  // date: Date;
  bookedTime:any =[];
  slotsAvailable:any = [];
  slotsRequested:any =[];
  slotsChecked:any =[];

  // for permanent book
  seatsBooked:any = [];
  seatsAvailable:any = [];
  seatsChecked:Number[] = [];
  seatsRequested:Number[] =[];
  
  // for booking map component
  totalSeats:Number=0;

  constructor(  
    private authService:AuthService,
    private router:Router,
    private route: ActivatedRoute,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    console.log("HERE");
    this.authService.getDetails().subscribe( (inventory) => {
      
      console.log(inventory);
      this.centers = [];

      for (let detail of inventory['plan_details'] ) {
        this.centers.push(detail.center);
      }

      // this.center = "0";
      this.route.queryParams.subscribe(params => {
        let center=params['center'];
        let plan=params['plan'];
        let pack=params['package'];
        let packages=['Hotdesk','Dedicated','MeetingRoom'];
        // console.log(params);
        if(Number(center)){
          this.updateCenter(this.centers[center-1]).then(() => {
            if(Number(pack)){
              this.stepNumber=3;
              // console.log(Number(pack));
              this.selectedPackage=packages[Number(pack)-1];
              switch(pack){
                case "1": this.subStepNumber=1;
                          break;
                case "2": this.subStepNumber=2;
                          break;
                case "3": this.subStepNumber=3;
                          break;
              }
            }
            // console.log(plan);
            if(pack!=3&&pack&&plan){
              // console.log("called");
              this.plan=plan;
              this.stepNumber=4;
            }
          });
          // console.log("center");
          // console.log(this.center);
          // console.log("selectedPackage");
          // console.log(this.selectedPackage);
          // console.log("plan");
          // console.log(this.plan);
        }
      });
      this.prices=inventory['plan_details'][0];
      this.plan_duration=inventory['plan_details'][0]['plan_duration'];
      this.selected_plan_duration=this.plan_duration;
      this.totalMtr = Number(inventory['plan_details'][0]['meetingroom_price']['total']);
      for (var i=1;i<=this.totalMtr;i++) {
        this.totalMtrArray.push(i);
      }
      
    });
    
    /* this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.name = profile.user.name;
      this.username = profile.user.username;
      this.email = profile.user.email;
    },
    err => {
      console.log("ERROR"+err);
      return false;
    }); */
  }

  updateCenter(c) {
    return new Promise(resolve => {
      console.log(c);
      this.center=c;
      this.authService.getDetails().subscribe( (inventory) => {

        for ( let i=0; i<inventory['plan_details'].length; i++){
          
          let detail=inventory['plan_details'][i];
        
          if(detail.center == this.center) {
            this.prices=inventory['plan_details'][i];
            this.plan_duration=inventory['plan_details'][i]['plan_duration'];
            this.selected_plan_duration=this.plan_duration;
            this.totalMtr = Number(inventory['plan_details'][i]['meetingroom_price']['total']);
            this.totalMtrArray = [];
            while(this.totalMtrArray.length) {
              this.totalMtrArray.pop();
            }
            for (var k=1;k<=this.totalMtr;k++) {
              this.totalMtrArray.push(k);
            }
            break;
          }
        }
        this.stepNumber=2;
        resolve();
      });
    });
  }
  
  getLastDateOfMonth(date){
    // console.log("Getting Last Date Of "+date.toISOString());
    date.setMonth(date.getMonth()+1);
    date.setDate(0);
    return date.getDate();
  }
  
  checkMeetingRoomSlots(slot,i,reset=0){
    console.log("this.slotsAvailable");
    console.log(this.slotsAvailable);
    console.log("this.slotsChecked");
    console.log(this.slotsChecked);
    console.log("this.slotsRequested");
    console.log(this.slotsRequested);
    console.log("this.bookedTime");
    console.log(this.bookedTime);
    if(reset){
      console.log("CLICKED RESET");
      for(let j=0;j<24;j++){
        this.slotsChecked[j]=false;
      }
      return false;
    }
    // console.log(i);
    let startTrue=this.slotsChecked.indexOf(true);
    let endTrue=this.slotsChecked.lastIndexOf(true);
    // console.log(startTrue);
    // console.log(endTrue);
    if(!(startTrue+1)){
      if(!(this.bookedTime.indexOf(slot)+1))
        this.slotsChecked[i]=true;
    }
    else{
      if(startTrue==endTrue){
        // only one true
        // console.log("here");
        if(i==startTrue){
          this.slotsChecked[i]=false;
        }
        else
        if(i<startTrue){
          // console.log("here - 2");
          for(let j=startTrue-1;j>=i;j--){
            if(!(this.bookedTime.indexOf(this.slotsAvailable[j])+1))
              this.slotsChecked[j]=true;
            else
              break;
          }
        }
        else{
          // console.log("here - 3");
          for(let j=startTrue+1;j<=i;j++){
            if(!(this.bookedTime.indexOf(this.slotsAvailable[j])+1))              
              this.slotsChecked[j]=true;
            else
              break;
          }
        }
      }
      else{
        for(let j=0;j<this.slotsChecked.length;j++){
          this.slotsChecked[j]=false;
        }
        this.slotsChecked[i]=true;
      }
    }
    this.calculateEndDateAndPrice(this.startdate,this.selected_plan_duration);
  }

  calculateEndDateAndPrice(extraDays,months){
    // console.log("called_for_price");
    // console.log(this.startdate);
    if(new Date(String(this.startdate))<new Date()){
      // show ERROR MESSAGE!
      this.startdate=new Date().toISOString();
    }
    let planPrice:any=0;
    months=Number(months);
    if(this.startdate){
      let startDate:Date;
      let endDate:Date;
      let totalDays:Number;
      extraDays=new Date(extraDays);
      let plan=this.plan;
      // extraDays consist of startdate, months -> selected_plan_duration tested till this point
      // console.log("Last Date")
      extraDays=this.getLastDateOfMonth(new Date(extraDays))-extraDays.getDate()+1;
      //+1 to include the day with startdate!
      // console.log("totalDays: "+totalDays);
      switch(plan){
        case '1DP': this.enddate=this.startdate;
                    planPrice=this.prices['hotdesk_price']['_'+plan];
                    if(!this.seats||!this.startdate){
                      this.amount=0;
                    }
                    else{
                      this.amount=planPrice*Number(this.seats);
                    }
                    break;
        case '4DP':
        case '10DP':  startDate=new Date(String(this.startdate));
                      endDate=new Date(String(this.startdate));
                      totalDays=Number(extraDays)+startDate.getDate();
                      if(startDate.getDate()==1){
                        endDate.setMonth(endDate.getMonth()+months);
                        endDate.setDate(0);
                        this.enddate=endDate.toISOString();
                        this.enddate=this.enddate.slice(0,this.enddate.indexOf('T'));
                        extraDays=0;
                        // console.log("extraDays: "+extraDays);
                      }
                      else{
                        endDate.setMonth(endDate.getMonth()+months+1);
                        endDate.setDate(0);
                        this.enddate=endDate.toISOString();
                        this.enddate=this.enddate.slice(0,this.enddate.indexOf('T'));
                      }
                      planPrice=this.prices['hotdesk_price']['_'+plan];
                      if(!this.seats||!this.startdate||!this.selected_plan_duration){
                        this.amount= 0;
                        // this.amountBreakdown=[0];
                      }
                      else{
                        this.amountBreakdown=[];
                        for(let ind=0;ind<Number(this.selected_plan_duration);ind++){
                          this.amountBreakdown.push(planPrice*Number(this.seats));
                        }
                        // console.log("totalDays");
                        // console.log(totalDays);
                        // console.log("extraDays");
                        // console.log(extraDays);
                        if(extraDays)
                          this.amountBreakdown.splice(1,0,(planPrice*Number(this.seats)/Number(totalDays))*extraDays);
                        // console.log(this.amountBreakdown);
                        this.amount=this.amountBreakdown.reduce((a,b) => { return a+b;});
                        // this.amount= planPrice*Number(this.seats);
                        // this.amount= Number(this.amount)*Number(this.selected_plan_duration);
                        // this.amount=Number(this.amount)+(planPrice/Number(totalDays))*extraDays;
                        // this.amountBreakdown.push((planPrice/Number(totalDays))*extraDays);
                      }
                      break;
        case '18DP':
        case '30DP':  startDate=new Date(String(this.startdate));
                      endDate=new Date(String(this.startdate));
                      // console.log("CALLED: "+startDate.toISOString());
                      totalDays=Number(extraDays)+startDate.getDate();
                      if(startDate.getDate()==1){
                        endDate.setMonth(endDate.getMonth()+months);
                        endDate.setDate(0);
                        this.enddate=endDate.toISOString();
                        this.enddate=this.enddate.slice(0,this.enddate.indexOf('T'));
                        extraDays=0;
                        // console.log("extraDays: "+extraDays);
                      }
                      else{
                        endDate.setMonth(endDate.getMonth()+months+1);
                        endDate.setDate(0);
                        console.log(endDate);
                        this.enddate=endDate.toISOString();
                        this.enddate=this.enddate.slice(0,this.enddate.indexOf('T'));
                        console.log(this.enddate);
                      }
                      planPrice=this.prices['permanentbook_price']['_'+plan];
                      // console.log(this.seatsChecked);
                      // console.log(this.seatsChecked.length);
                      if(!this.seatsChecked.length||!this.startdate||!this.selected_plan_duration){
                        this.amount= 0;
                      }
                      else{
                        let tmp=this.seatsChecked.filter(function(x){return !(!x);});
                        // console.log(tmp);
                        this.amountBreakdown=[];
                        for(let ind=0;ind<Number(this.selected_plan_duration);ind++){
                          this.amountBreakdown.push(planPrice*tmp.length);
                        }
                        if(extraDays)
                          this.amountBreakdown.splice(1,0,(planPrice*Number(tmp.length)/Number(totalDays))*extraDays);
                        // console.log(this.amountBreakdown);
                        this.amount=this.amountBreakdown.reduce((a,b) => { return a+b;});  
                        // console.log(this.amount);
                        // this.amount= planPrice*tmp.length;
                        // this.amount= Number(this.amount)*Number(this.selected_plan_duration);
                        // this.amount=Number(this.amount)+(planPrice/Number(totalDays))*extraDays;
                      }
                      break;
        case 'MTR':   planPrice=this.prices['meetingroom_price']['price'];
                      // console.log(planPrice);
                      if(true){
                        let startDate=new Date(String(this.startdate));
                        let endDate=new Date(String(this.startdate));
                        if(this.slotsChecked.includes(true)){
                          let tmpStartMTR=this.slotsChecked.indexOf(true);
                          let tmpEndMTR=this.slotsChecked.lastIndexOf(true);
                          startDate.setHours(tmpStartMTR);
                          startDate.setMinutes(0);
                          endDate.setHours(tmpEndMTR+1);
                          endDate.setMinutes(0);
                          // console.log("startDate");
                          // console.log(startDate);
                          // console.log("endDate");
                          // console.log(endDate);
                          this.startdatetime=startDate;
                          // this.startdatetime=this.startdatetime.slice(0,this.startdatetime.indexOf('T'));
                          this.enddatetime=endDate;
                          this.amountBreakdown=[];
                          for(let ind=0;ind<tmpEndMTR-tmpStartMTR+1;ind++){
                            this.amountBreakdown.push(planPrice);
                          } 
                          this.amount=this.amountBreakdown.reduce((a,b) => { return a+b;});
                          
                          // this.enddatetime=this.enddatetime.slice(0,this.enddatetime.indexOf('T'));
                        }
                        else{
                          this.amount= 0;
                        }
                      }
                      break;                    
      }
    }
    this.amount=Math.round(Number(this.amount)*100)/100;
    return this.amount;
  }
  bookingform() {
    // console.log(this.startdate);
    // console.log(this.enddate);
    let startdate=new Date(String(this.startdate));
    let today=new Date();
    if(startdate<today){
      this.flashMessage.show('Please select a valid date!', {cssClass: 'alert-danger', timeout: 3000});
      return;
    }
    if(this.plan == "MTR"){
      // console.log(this.slotsChecked);
      
      this.slotsRequested = [];
      var slotsEndTime = [];

      for(var i=0; i< this.slotsAvailable.length; i++ ) {
        if(this.slotsChecked[i]) {
          this.slotsRequested.push(Number(this.slotsAvailable[i]));
          slotsEndTime.push(Number(this.slotsAvailable[i])+1);
        }
      }
      
      if( this.slotsRequested.length == 0 ) {
          this.flashMessage.show('Please select atleast 1 slot', {cssClass: 'alert-danger', timeout: 3000});
          return false;
      }
      const mtrData = {
        username: this.username,
        name: this.name,
        email: this.email,
        plan: this.plan,
        startdate: this.startdatetime,
        enddate: this.enddatetime,
        mtrid: this.mtrid,
        // starttime: this.slotsRequested,
        // endtime: slotsEndTime,
        center: this.center,
        amount: this.amount,
        amountBreakdown: this.amountBreakdown
      } 
        // console.log(mtrData);
        localStorage.setItem("bookingData",JSON.stringify(mtrData));
        this.router.navigate(['billing']);
        /*this.authService.meetingroom(mtrData).subscribe(data => {
          if(data.success){
            this.flashMessage.show('Meeting Room Booking done', { cssClass: 'alert-success', timeout: 3000 });
            this.checkmeetingroomavailability();
          }
          else{
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          }
        });*/
      
    }
    else
    if(this.plan == "VO"||this.plan == "VO+"){
      // console.log(new Date());
      const slotData = {
        username: this.username,
        name: this.name,
        email: this.email,
        startdate: this.startdate,
        enddate: this.enddate,
        //ONE CASE NOT RESOLVED - 12AM still act as 12 instead of 0!
        // starttime: this.startHour+" "+this.startHourType, //(this.startHourType=="pm"&&this.startHour!=12)?(Number(this.startHour)+12)%24:Number(this.startHour),
        // endtime: this.endHour+" "+this.endHourType, //(this.endHourType=="pm"&&this.endHour!=12)?(Number(this.endHour)+12)%24:Number(this.endHour),
        plan: this.plan,
        center : this.center,
        amount: this.amount
        // seats: this.seats
      }
      //VALIDATION
      if(slotData.startdate>=slotData.enddate){
        this.flashMessage.show('Start Date cannot be greater then End Date', { cssClass: 'alert-danger', timeout: 3000 });
      }
      else{
        //WHEN DATA IS VALID
        console.log(slotData);
        this.authService.virtualoffice(slotData).subscribe(data => {
          if(data.success){
            this.flashMessage.show('Your query for Vitual Office is submitted, We will reach you soon!', { cssClass: 'alert-success', timeout: 3000 });
          } 
          else{
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          }
        });
      }
    }
    else
    if (this.plan == "1DP" || this.plan == "4DP" || this.plan == "10DP") {
      const slotData = {
        username: this.username,
        name: this.name,
        email: this.email,
        startdate: this.startdate,
        enddate: this.enddate,
        plan: this.plan,
        seats: this.seats,
        center : this.center,
        amount: this.amount,
        amountBreakdown: this.amountBreakdown
      }
      if(!this.startdate||!this.enddate||!this.seats){
        this.flashMessage.show('Please fill all the required details!', { cssClass: 'alert-danger', timeout: 3000 });
      }
      else
      if(this.startdate>this.enddate){
          this.flashMessage.show('Start date cannot be after End Date!', { cssClass: 'alert-danger', timeout: 3000 });
      }
      else
      if(Number(this.seats)>100||Number(this.seats)<1){
          this.flashMessage.show('Specify seats between 1 and 100!', { cssClass: 'alert-danger', timeout: 3000 });
      }
      else{
        localStorage.setItem("bookingData",JSON.stringify(slotData));
        this.router.navigate(['billing']);
        /*this.authService.hotdesking(slotData).subscribe(data => {
          if (data.success) {
            this.flashMessage.show('HotDesk Booking done', { cssClass: 'alert-success', timeout: 3000 });
          } else {
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          }
        });*/
      }
    } else {
      
      if(this.startdate&&this.enddate){
        if(this.startdate>=this.enddate){
          this.flashMessage.show('Start Date cannot be greater then End Date!', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else{
            this.seatsRequested = [];
            for(var i=0; i< this.seatsAvailable.length; i++ ) {
              if(this.seatsChecked[i]) {
                this.seatsRequested.push(this.seatsAvailable[i]);
              }
            }

            if( this.seatsRequested.length == 0 ) {
              this.flashMessage.show('Please select atleast 1 seat', {cssClass: 'alert-danger', timeout: 3000});
              return false;
            }

            const slotData = {
              username: this.username,
              name: this.name,
              email: this.email,
              startdate: this.startdate,
              enddate: this.enddate,
              plan: this.plan,
              seatsNumber: this.seatsRequested,
              center : this.center,
              amount: this.amount,
              amountBreakdown: this.amountBreakdown
            }

            console.log(slotData);
            localStorage.setItem("bookingData",JSON.stringify(slotData));
            this.router.navigate(['billing']);
            /*
            this.authService.permanentbook(slotData).subscribe(data => {
            if(data.success){
              this.flashMessage.show('Permanent Booking done', {cssClass: 'alert-success', timeout: 3000});
              setTimeout(() => {
                this.router.navigate(['/bookinfo']);
              },1000);
            } else{
              this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            }
            });
            */
        }
      }
      else{
        this.flashMessage.show('Please fill all the required details!', { cssClass: 'alert-danger', timeout: 3000 });
      }
    }

  }

  checkavailability() {
    // console.log("IN");
    if(this.startdate==null){
      console.log("FALSE CONDITION");
      return false;
    }
    const slotData = {
        startdate: this.startdate,
        enddate: this.enddate,
        plan: this.plan,
        center: this.center
    }
    let seatsToShow=[];
    this.totalSeats=0;
    this.getTotalSeats(this.center).then( (result) => {
      // console.log('result');
      // console.log(result);
      seatsToShow=result['seatsArr'];
      this.totalSeats=result['totalSeats'];
      // console.log(seatsToShow);
      // console.log(seatsToShow.length);
      this.authService.checkpermanentbooking(slotData).then((bookedSeats) => {
        this.seatsBooked =  bookedSeats;
        console.log(bookedSeats);
        for (let eachSeat of this.seatsBooked) {
          var index = seatsToShow.indexOf(eachSeat);
          seatsToShow.splice(index, 1);
        }
        this.seatsAvailable = seatsToShow;
      });
    });
    // var seatsToShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }
  getTotalSeats(center){
    // console.log("RETURN");
    return new Promise( (resolve) => {
      let result={
        totalSeats: 0,
        seatsArr: []
      }
      this.authService.getDetails().subscribe((inventory) => {
        // console.log(inventory);
        // console.log(this.center);
        for(let inv of inventory["plan_details"]){
          if(inv.center==this.center){
            // console.log(inv['total_seats']);
            result.totalSeats=inv['total_seats'];
            for(let i=1;i<=inv['total_seats'];i++){
              result.seatsArr.push(i);
            }
            resolve(result);
            break;
          }
        }
      });
    });
  }

  checkmeetingroomavailability() {

    if (this.startdate == null && !this.mtrid) {
      return false;
    }

    const data = {
      startdate: this.startdate,
      center: this.center,
      mtrid: this.mtrid
    }
    // console.log("data for check procedure");
    // console.log(data);
    this.slotsChecked=[];
    var slotsToShow = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    for (var i = 0; i < slotsToShow.length; i++) {
      this.slotsChecked[i] = false;
    }
    // this.slotsChecked = [];
    this.authService.checkmeetingroombooking(data).then((bookedTime) => {
      // console.log("bookedTime");
      // console.log(bookedTime);
      this.bookedTime = bookedTime;
      console.log(slotsToShow);
      console.log(bookedTime);
      // console.log(bookedTime);
      this.slotsAvailable = slotsToShow;
    });
  }

  /*bookPlan(planValue){
    this.plan=planValue;
    if(planValue=="1DP"||planValue=="4DP"||planValue=="10DP"){
      window.location.hash="#hotdesking-form";
    }
    else
    if(planValue=="18DP"||planValue=="30DP"){
      window.location.hash="#permanentbooking-form";
    }
    else
    if(planValue=="MTR"||planValue=="VO"||planValue=="VO+"||planValue=="TS"){
      window.location.hash="#otherbooking-form";
    }
    console.log("AASDASD");
    console.log(planValue);
  }*/
  /*getAllBookingDetails(){
    console.log("calledFromBookings");
    let dataToSend:Object={
      username: this.username,
      name: this.name,
      email: this.email,
      startdate: this.startdate,
      enddate: this.enddate,
      seats: this.seats,
      plan: this.plan
    }
    return dataToSend;
  }*/

}
