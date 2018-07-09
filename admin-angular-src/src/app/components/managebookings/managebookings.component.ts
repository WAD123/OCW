import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.component.html',
  styleUrls: ['./managebookings.component.css']
})
export class ManagebookingsComponent implements OnInit {
  loading: boolean = false;
  bookingsToShow: Number = 1;// 1 -> Dedicated, 2 -> Meeting Room, 3 -> HotDesk
  private centers: any;
  private inventory;
  private showInvoiceId:String="";
  private monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
  private bookings: Object;
  private adminuser: any;
  private permanentbookings: any;
  private hotdeskbookings: any;
  private meetingroombookings: any;

  //for invoice view only
  invoiceStartDate:Date=new Date();
  invoiceEndDate:Date=new Date();

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {

    this.loading = true;

    this.getProfile().then((adminuser) => {

      this.adminuser = adminuser;

      if (!adminuser['book_approve'] && !adminuser['book_create'] && !adminuser['book_delete']) {
        this.flashMessage.show('Access Denied to Manage Bookings', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/profile']);
      }

      if (this.adminuser['center']) {

        this.centers = {
          centers: this.adminuser['center']
        }

        this.getAllPermanentBookings(this.centers).then((permanentbookings) => {
          this.permanentbookings = permanentbookings;
          if (this.permanentbookings.length == 0) {
            this.permanentbookings = null;
          }
          this.loading = false;
        });

        this.getAllHotdeskBookings(this.centers).then((hotdeskbookings) => {
          this.hotdeskbookings = hotdeskbookings;
          if (this.hotdeskbookings.length == 0) {
            this.hotdeskbookings = null;
          }
          this.loading = false;
        });

        this.getAllMeetingRoomBookings(this.centers).then((meetingroombookings) => {
          this.meetingroombookings = meetingroombookings;
          if (this.meetingroombookings.length == 0) {
            this.meetingroombookings = null;
          }
          this.loading = false;
        });
      }
    });
  }

  getInvoiceDates(i,startdate,length=0){
    let tmpStartDate=new Date(startdate);
    let tmpEndDate=new Date(startdate);
    if(i==length){
      i=0;
    }
    if(i==0){
      this.invoiceStartDate=tmpStartDate;
      tmpEndDate.setMonth(tmpEndDate.getMonth()+1);
      tmpEndDate.setDate(tmpEndDate.getDate()-1);
      this.invoiceEndDate=tmpEndDate;
    }
    else
    if(i==1){
      tmpStartDate.setMonth(tmpStartDate.getMonth()+1);
      // tmpStartDate.setDate(tmpStartDate.getDate()-1);
      tmpEndDate.setMonth(tmpStartDate.getMonth()+1);
      tmpEndDate.setDate(0);
      this.invoiceStartDate=tmpStartDate;
      this.invoiceEndDate=tmpEndDate;
    }
    else{
      tmpStartDate.setMonth(tmpStartDate.getMonth()+i);
      tmpStartDate.setDate(1);
      this.invoiceStartDate=tmpStartDate;
      tmpEndDate.setMonth(tmpEndDate.getMonth()+i+1);
      tmpEndDate.setDate(0);
      this.invoiceEndDate=tmpEndDate;
    }
  }

  getAllMeetingRoomBookings(centers) {
    return new Promise((resolve) => {
      this.authService.getMeetingroomBookings(centers).subscribe((bookingdata) => {
        if (bookingdata.success) {
          for (let booking of bookingdata.MeetingRoomBookings) {

            booking.sdate = new Date(booking.startdate);
            booking.startmonth = booking.sdate.getMonth();
            booking.year = booking.sdate.getYear();
            
            booking.startdate = new Date(booking.startdate);
            booking.enddate = new Date(booking.enddate);
            booking.invoiceVisible=[];
            for(let ind=0;ind<=(booking.enddate.getMonth()+12*(booking.enddate.getYear()-booking.startdate.getYear())-booking.startdate.getMonth());ind++){
              // console.log("called");
              if(!ind){
                booking.invoiceVisible.push(true);
              }
              else{
                booking.invoiceVisible.push(false);
              }
            }
            // console.log(booking.invoiceVisible);
          }
           resolve(bookingdata.MeetingRoomBookings.reverse());
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }
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

  getAllHotdeskBookings(centers) {
    return new Promise((resolve) => {
      this.authService.getHotdeskBookings(centers).subscribe(data => {
        if (data.success) {
          for (let booking of data.HotdeskBookings) {

            booking.sdate = new Date(booking.startdate);
            booking.edate = new Date(booking.enddate);
            booking.startmonth = booking.sdate.getMonth();
            booking.year = booking.sdate.getFullYear();
            
            booking.startdate = booking.startdate.slice(0, booking.startdate.indexOf("T"));
            booking.enddate = booking.enddate.slice(0, booking.enddate.indexOf("T"));
            booking.invoiceVisible=[];
            for(let ind=0;ind<=(booking.edate.getMonth()+12*(booking.edate.getYear()-booking.sdate.getYear())-booking.sdate.getMonth());ind++){
              // console.log("called");
              if(!ind){
                booking.invoiceVisible.push(true);
              }
              else{
                booking.invoiceVisible.push(false);
              }
            }
            // console.log(booking.invoiceVisible);
            if (booking.plan == "1DP") {
              booking.plan = "One day Pass";
            } else if (booking.plan == "4DP") {
              booking.plan = "Four days Pass";
            } else if (booking.plan == "10DP") {
              booking.plan = "Ten days Pass";
            }
          }
          resolve(data.HotdeskBookings.reverse());
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    });
  }

  getAllPermanentBookings(centers) {
    return new Promise((resolve) => {
      this.authService.getPermanentBookings(centers).subscribe(data => {
        if (data.success) {

          for (let booking of data.PermanentBookings) {

            booking.sdate = new Date(booking.startdate);
            booking.edate = new Date(booking.enddate);
            booking.startmonth = booking.sdate.getMonth();
            booking.year = booking.sdate.getYear();

            booking.startdate = booking.startdate.slice(0, booking.startdate.indexOf("T"));
            booking.enddate = booking.enddate.slice(0, booking.enddate.indexOf("T"));
            booking.invoiceVisible=[];
            for(let ind=0;ind<=(booking.edate.getMonth()+12*(booking.edate.getYear()-booking.sdate.getYear())-booking.sdate.getMonth());ind++){
              console.log("called");
              if(!ind){
                booking.invoiceVisible.push(true);
              }
              else{
                booking.invoiceVisible.push(false);
              }
            }
            console.log(booking.invoiceVisible);
            if (booking.plan == "18DP") {
              booking.plan = "Eighteen day Pass";
            } else if (booking.plan == "30DP") {
              booking.plan = "Thirty days Pass";
            }
          }
          resolve(data.PermanentBookings.reverse());
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }
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

  approve_permanent(book_id, status) {

    if (!confirm("This action cannot be undone. Are you sure?")) {
      return false;
    }

    const bookid = {
      book_id: book_id,
      book_status: status
    }

    this.authService.approvePermanentBooking(bookid).subscribe((data) => {

      if (data.success) {
        if (data.status) {
          this.flashMessage.show('Approved Successfully', { cssClass: 'alert-success', timeout: 3000 });
        } else if (!data.status) {
          this.flashMessage.show('Declined Successfully', { cssClass: 'alert-success', timeout: 3000 });
        }
      } else {
        this.flashMessage.show('Failed to Approve', { cssClass: 'alert-danger', timeout: 3000 });
      }

      this.getAllPermanentBookings(this.centers).then((permanentbookings) => {
        this.permanentbookings = permanentbookings;
      });

    });
  }

  approve_hotdesk(book_id, status) {

    if (!confirm("This action cannot be undone. Are you sure?")) {
      return false;
    }

    const bookid = {
      book_id: book_id,
      book_status: status
    }

    this.authService.approveHotdeskBooking(bookid).subscribe((data) => {

      if (data.success) {
        if (data.status) {
          this.flashMessage.show('Approved Successfully', { cssClass: 'alert-success', timeout: 3000 });
        } else if (!data.status) {
          this.flashMessage.show('Declined Successfully', { cssClass: 'alert-success', timeout: 3000 });
        }
      } else {
        this.flashMessage.show('Failed to Approve', { cssClass: 'alert-danger', timeout: 3000 });
      }

      this.getAllHotdeskBookings(this.centers).then((hotdeskbookings) => {
        this.hotdeskbookings = hotdeskbookings;
      });
    });


  }

  approve_mtr(book_id, status) {

    if (!confirm("This action cannot be undone. Are you sure?")) {
      return false;
    }

    const bookid = {
      book_id: book_id,
      book_status: status
    }

    this.authService.approveMeetingroomBooking(bookid).subscribe((data) => {

      if (data.success) {
        if (data.status) {
          this.flashMessage.show('Approved Successfully', { cssClass: 'alert-success', timeout: 3000 });
        } else if (!data.status) {
          this.flashMessage.show('Declined Successfully', { cssClass: 'alert-success', timeout: 3000 });
        }
      } else {
        this.flashMessage.show('Failed to Approve', { cssClass: 'alert-danger', timeout: 3000 });
      }

      this.getAllMeetingRoomBookings(this.centers).then((meetingroombookings) => {
        this.meetingroombookings = meetingroombookings;
      });
    });
  }

  movetotrash(id, itemType) {

    if (!confirm("This action cannot be undone. Are you sure?")) {
      return false;
    }

    if (itemType == 'permanent') {

      this.authService.getPermanentBookingById({id:id}).subscribe( (data) => {
        
        if(data.success) {
          
          const itemWrapped = { 
            item: data.PermanentBooking,
            itemType: itemType
          }
          
          this.authService.moveToTrash(itemWrapped).subscribe( (data) => {
            
            if (data.success) {
              
              this.authService.deletePermanentBooking({ book_id: id }).subscribe( (data) => {
                
                if (data.success) {
                  
                  this.flashMessage.show('The booking has been moved to Trash', { cssClass: 'alert-success', timeout: 5000 });
                  
                  this.getAllPermanentBookings(this.centers).then( (permanentbookings) => {
                    this.permanentbookings = permanentbookings;
                  });
                } else {
                  this.flashMessage.show('Failed to delete from Dedicated Bookings DB!', { cssClass: 'alert-danger', timeout: 3000 });
                }
              });
            } else {
              this.flashMessage.show('Failed to move this permanent booking to Trash', { cssClass: 'alert-danger', timeout: 3000 });
            }
          });
        } else {
          this.flashMessage.show('Unable to locate this permanent booking in DB', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    } else if (itemType == 'hotdesk') {

      this.authService.getHotdeskBookingbyId({id:id}).subscribe( (data) => {
        
        if(data.success) {

          const itemWrapped = { 
            item: data.HotdeskBooking,
            itemType: itemType
          }

          this.authService.moveToTrash(itemWrapped).subscribe((data) => {
            if (data.success) {
              this.authService.deleteHotdeskBooking({ book_id: id }).subscribe((data) => {
                if (data.success) {
                  this.flashMessage.show('The booking has been moved to Trash', { cssClass: 'alert-success', timeout: 3000 });
                  this.getAllHotdeskBookings(this.centers).then((hotdeskbookings) => {
                    this.hotdeskbookings = hotdeskbookings;
                  });
                } else {
                  this.flashMessage.show('Failed to delete from Hotdesk DB!', { cssClass: 'alert-danger', timeout: 3000 });
                }
              });
            } else {
              this.flashMessage.show('Failed to move this HotDesk booking to Trash', { cssClass: 'alert-danger', timeout: 3000 });
            }
          });
        } else {
          this.flashMessage.show('Unable to locate this HotDesk booking in DB', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    } else if (itemType == 'mtr') {

      this.authService.getmtrBookingById({id:id}).subscribe( (data) => {
        
        if(data.success) {

          const itemWrapped = {
            item: data.mtrBooking,
            itemType: itemType
          }

          this.authService.moveToTrash(itemWrapped).subscribe((data) => {
            if (data.success) {
              this.authService.deleteMeetingroomBookings({ book_id: id }).subscribe((data) => {
                if (data.success) {
                  this.flashMessage.show('The booking has been moved to Trash', { cssClass: 'alert-success', timeout: 3000 });
                  this.getAllMeetingRoomBookings(this.centers).then((meetingroombookings) => {
                    this.meetingroombookings = meetingroombookings;
                  });
                } else {
                  this.flashMessage.show('Failed to delete from Meeting Room DB!', { cssClass: 'alert-danger', timeout: 3000 });
                }
              });
            } else {
              this.flashMessage.show('Failed to move this Meeting Room booking to Trash', { cssClass: 'alert-danger', timeout: 3000 });
            }
          });
        } else {
          this.flashMessage.show('Unable to locate this MTR booking in DB', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
      }
    }

    invoice(id,plan,bkng) {
      console.log(bkng);
      console.log("Before");
      console.log(this.showInvoiceId);
      this.toggleShowInvoice(id);
    }
    
    toggleShowInvoice(id) {
      if(this.showInvoiceId==""){
        this.showInvoiceId = id;
      }
      else{
        this.showInvoiceId = "";
      }
      // this.showInvoice[id] = !this.showInvoice[id];
      console.log("After");
      console.log(this.showInvoiceId);
    }

}
