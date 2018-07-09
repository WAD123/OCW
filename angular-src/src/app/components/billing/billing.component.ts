import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { Http, Headers } from '@angular/http';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  public GLOBALVAR:String="";
  bookingData:any={};
  amount:Number=0;
  firstname:String="Animesh";
  key:String="fr9GjCgQ";
  hash_string:String="holaString";
  hash:String="holaHash";
  txnid:String='HL' + Math.floor(Math.random()*100000);
  lastname:String="Kashyap";
  email:String="animeshtheanime@gmail.com";
  phone:String="8802525672";
  productinfo:String="hmmmmmmmmmmmmmmm";
  surl:String="http://localhost:4200/successful";
  furl:String="http://localhost:4200/failed";
  // service_provider:String;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private http: Http,
    private router:Router
  ) { }

  ngOnInit() {
    this.bookingData=JSON.parse(localStorage.getItem("bookingData"));
    localStorage.removeItem("bookingData");
    if(!this.bookingData){
      this.router.navigate(['']);
    }
    else{
      // console.log("amount");
      // console.log(this.bookingData['amount']);
      this.amount=this.bookingData['amount'];
    }
  }
  bookNow(form){
    console.log(form);
    switch(this.bookingData.plan){
      case "1DP":
      case "4DP":
      case "10DP":
        this.authService.hotdesking(this.bookingData).subscribe(data => {
          if (data.success) {
            this.flashMessage.show('HotDesk Booking done', { cssClass: 'alert-success', timeout: 3000 });
            // this.http.post("https://test.payu.in/_payment",{
            //   amount: this.amount,
            //   firstname: this.firstname,
            //   key: this.key,
            //   hash: this.hash,
            //   txnid: this.txnid,
            //   lastname: this.lastname,
            //   email: this.email,
            //   phone: this.phone,
            //   productinfo: this.productinfo,
            //   furl: this.furl,
            //   surl: this.surl
            // }).subscribe((data) => {
            //   console.log(data);
            // })
            // console.log(form.submit);
            // form.submit();
            this.validatePaymentFields(form);
          } else {
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          }
        });
        break;
      case "18DP":
      case "30DP":
        this.authService.permanentbook(this.bookingData).subscribe(data => {
        if(data.success){
          this.flashMessage.show('Permanent Booking done', {cssClass: 'alert-success', timeout: 3000});
          // setTimeout(() => {
            // this.router.navigate(['/bookinfo']);
          // },1000);
          // form.submit();
          this.validatePaymentFields(form);
        } else{
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        }
        });
        break;
      case "MTR":
        this.authService.meetingroom(this.bookingData).subscribe(data => {
          if(data.success){
            this.flashMessage.show('Meeting Room Booking done', { cssClass: 'alert-success', timeout: 3000 });
            // this.checkmeetingroomavailability();
            // form.submit();
            this.validatePaymentFields(form);
          }
          else{
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          }
        });
        break;
  
    }
  }
  validatePaymentFields(form){
    const paymentFields={
      // key: "A5RDmljl",
      key: "gtKFFx", //test
      // key: "A5RDmljl",
      txnid: "fd3e847h2",
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      surl: this.surl,
      furl: this.furl,
      amount: Number(this.amount).toFixed(2),
      productinfo: this.productinfo,
      service_provider: "payu_paisa",
      // hash: null
    }
    // console.log(this);
    // console.log("paymentFields");
    // console.log(paymentFields);
    // this.service_provider= "payu_paisa";
    // this.hash= null;
    // this.firstname= paymentFields['firstname'];
    // this.lastname=paymentFields['lastname'];
    // this.email=paymentFields['email'];
    // this.phone=paymentFields['phone'];
    // this.surl=paymentFields['surl'];
    // this.furl=paymentFields['furl'];
    // this.amount=paymentFields['amount'];
    this.key= paymentFields['key'];
    this.txnid= paymentFields['txnid'];
    this.authService.proceedWithPayment(paymentFields).subscribe((data) => {
      if(data.success){
        let hashData=data.result;
        console.log(hashData);
        // console.log(hashData['hash']);
        console.log(typeof(hashData['hash']));
        // paymentFields['hash']=hashData['hash'];
        this.hash=hashData['hash'];
        console.log("this.hash");
        console.log(this.hash);
        // paymentFields.hash=hashData.hash;
        // this.productinfo=paymentFields['productinfo'];
        // this.hash_string=paymentFields['hash_string'];

        // form.submit();
      }
      /*this.sendPaymentRequest(paymentFields).subscribe((data) => {
        if(data){
          console.log(data);
        }
      });*/
    });
  }
  // sendPaymentRequest(paymentFields){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post("https://test.payu.in/_payment",paymentFields, {headers: headers}).map(res => res.json());
  // }  
}
