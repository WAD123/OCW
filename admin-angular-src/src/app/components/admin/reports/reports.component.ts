import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validate.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  loading: boolean = true;
  private name: String = "";
  private plan: String = "";
  private username: String = "";
  private email: String = "";
  
  private adminuser: any;
  private centers;
  private selectedCenters: Boolean[] = [false];
  
  private hotdesk: Boolean = false;
  private hotdeskplans: String[] = ["1DP", "4DP", "10DP"];
  private hotdeskplansToShow: String[] = ["One day Pass", "Four days Pass", "Ten days Pass", "All"];
  private hotdeskplan: String = "";
  private hotdeskbookings: any[] = [];
  private hotdeskstarttodate :Date;
  private hotdeskstartfromdate:Date;
  private hotdeskendfromdate :Date;
  private hotdeskendtodate :Date;


  private permanent: Boolean = false;
  private permanentplans: String[] = ["18DP","30DP"];
  private permanentplansToShow: String[] = ["Eighteen days Pass", "Thirty days Pass", "All"]; 
  private permanentplan : String = "";
  private permanentbookings: any[]=[];
  private permanentstartfromdate :Date;
  private permanentstarttodate :Date;
  private permanentendfromdate :Date;
  private permanentendtodate :Date;


  private meetingroom: Boolean = false;
  private meetingroombookings: any[]=[];
  private meetingroomdatefrom: Date;
  private meetingroomdateto: Date;
  
  inventory:any;
  totalDedicatedSeats:Number = 0;
  occupiedSeats: Number = 0;
  percentOccupancy;

  // Pie
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.getProfile().then((adminuser) => {

      this.adminuser = adminuser;

      if (!adminuser['reports_view']) {
        this.flashMessage.show('Access Denied', { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['/admin/profile']);
      }

      this.centers = adminuser['center'];

      this.getInventory().then((inventory) => {
        this.inventory = inventory;
        this.loading=false;
      });

    });

  }

  getInventory() {
    return new Promise((resolve) => {
      this.authService.getInfo().subscribe((info) => {
        resolve(info.inventory);
      });
    });
  }

  getProfile() {
    return new Promise((resolve) => {
      const adminuser = JSON.parse(localStorage.getItem("adminuser"));
      const id = {
        id: adminuser.id
      }
      this.authService.getProfile(id).subscribe(profile => {
        resolve(profile.adminuser);
      },
        err => {
          console.log(err);
          return false;
        });
    });
  }

  onFilterSubmit() {
    this.loading=true;
    new Promise((resolve, reject) => {
      var centersToAdd: String[] = [];
      for (let i = 0; i < this.centers.length; i++) {
        if (this.selectedCenters[i]) {
          centersToAdd.push(this.centers[i]);
        }
      }
      resolve(centersToAdd);
    }).then((centersToAdd) => {
      if (!this.validateService.validateCenters(centersToAdd)) {
        this.flashMessage.show('Please select atleast 1 location!', { cssClass: 'alert-danger', timeout: 5000 });
        return false;
      } else {
        this.filter(centersToAdd);
      }
    });
  }

  filter(centersToAdd) {
    
    if (this.hotdesk) {
      
      if(this.hotdeskplan!="All") {
        this.plan = this.hotdeskplans[this.hotdeskplansToShow.indexOf(this.hotdeskplan)];
      } else {
        this.plan="all";
      }

      const params = {
        plan: this.plan,
        username: this.username,
        email: this.email,
        startdatefrom : this.hotdeskstartfromdate,
        startdateto: this.hotdeskstarttodate,
        enddatefrom : this.hotdeskendfromdate,
        enddateto : this.hotdeskendtodate,
        centers: centersToAdd
      }

      this.authService.filterHotdeskBookings(params).subscribe(data => {
        if (data.success) {
          
          for (let booking of data.HotdeskBookings) {
            
            booking.startdate =  booking.startdate.slice(0, booking.startdate.indexOf("T"));
            booking.enddate =  booking.enddate.slice(0, booking.enddate.indexOf("T"));
            
            if (booking.plan == "1DP") {
              booking.plan = "One day Pass";
            } else if (booking.plan == "4DP") {
              booking.plan = "Four days Pass";
            } else if (booking.plan == "10DP") {
              booking.plan = "Ten days Pass";
            }
          }
          this.hotdeskbookings = data.HotdeskBookings.reverse();
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.loading=false;
      });

    } else {
      this.hotdeskbookings = [];
    }

    if (this.permanent) {

      if(this.permanentplan!="All") {
        this.plan = this.permanentplans[this.permanentplansToShow.indexOf(this.permanentplan)];
      } else {
        this.plan = "all";
      }
      const params = {
        plan: this.plan,
        username: this.username,
        email: this.email,
        startdatefrom: this.permanentstartfromdate,
        startdateto: this.permanentstarttodate,
        enddatefrom: this.permanentendfromdate,
        enddateto: this.permanentendtodate,
        centers: centersToAdd
      }
      
      this.authService.filterPermanentBookings(params).subscribe(data => {
        if (data.success) {

          // extract centerwise data
          this.totalDedicatedSeats = 0;
          this.occupiedSeats = 0;
          
          for ( var i = 0; i< this.inventory.length; i++) {
            if (centersToAdd.includes(this.inventory[i].center)) {
              this.totalDedicatedSeats+=this.inventory[i].total_seats;
            }
          }
            
          
          for (let booking of data.PermanentBookings) {
            
            this.occupiedSeats += booking.seatsNumber.length;
            
            booking.startdate =  booking.startdate.slice(0, booking.startdate.indexOf("T"));
            booking.enddate =  booking.enddate.slice(0, booking.enddate.indexOf("T"));
            
            if (booking.plan == "18DP") {
              booking.plan = "Eighteen days Pass";
            } else if (booking.plan == "30DP") {
              booking.plan = "Thirty days Pass";
            } 
          }

          this.percentOccupancy = Math.round(((Number(this.occupiedSeats)/Number(this.totalDedicatedSeats))*10000));
          this.percentOccupancy = this.percentOccupancy/100;
          this.pieChartLabels = ['Occupied','Vacant'];
          this.pieChartData = [this.percentOccupancy, 100-this.percentOccupancy];
          
          
          this.permanentbookings = data.PermanentBookings.reverse();

        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.loading=false;
      });

    } else {
      this.permanentbookings = [];
    }

    if (this.meetingroom) {

      const params = {
        username: this.username,
        email: this.email,
        datefrom: this.meetingroomdatefrom,
        dateto: this.meetingroomdateto,
        centers: centersToAdd
      }

      this.authService.filterMeetingroomBookings(params).subscribe(data => {

        if (data.success) {
          for (let booking of data.MeetingRoomBookings) {
            booking.startdate =  new Date(booking.startdate);
            booking.enddate =  new Date(booking.enddate);
          } 
          this.meetingroombookings = data.MeetingRoomBookings.reverse();
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.loading=false;
      });

    } else {
      this.meetingroombookings = [];
    }

  }

}