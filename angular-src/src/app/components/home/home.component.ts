import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-ww.component.html',
  styleUrls: ['./home-ww.component.css']
})
export class HomeComponent implements OnInit {
  textToType:String="THE FUTURE STARTS HERE";
  textTyped:String="";
  
  
  bookNowForm:Boolean=false;
  center:String="0";
  package:String="0";
  plan:String="0";

  constructor(
  	private authService:AuthService,
    private router:Router
  	) { }

  ngOnInit() {
    let typing=setInterval(() => {
      // console.log("Called!");
      if(this.textTyped.length<this.textToType.length){
        // console.log("typing");
        this.textTyped=this.textTyped+this.textToType[this.textTyped.length];
      }
      else{
        clearInterval(typing);
      }
    },70);
  }
  isLoggedIn(){
    if(this.authService.loggedIn()){
  		return true;
    }
    else{
      return false;
    }
  }
  submitForBooking(){
  	if(this.isLoggedIn()){
    	this.router.navigate(['dashboard/newbook'],{queryParams:{plan:this.plan,package:this.package,center:this.center}});
    }
    else{
      this.bookNowForm=false;
      localStorage.setItem("destination",'dashboard/newbook');
      localStorage.setItem("destinationParams",JSON.stringify({plan:this.plan,package:this.package,center:this.center}));

      this.router.navigate(['entry']);
    }
  }
}