import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import {Router, ActivatedRoute } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {slideInOutTop} from '../../animations/index';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  animations: [slideInOutTop],
  host: { '[@slideInOutTop]': '' },
})
export class LoginRegisterComponent implements OnInit {
  
  //for existing user (login)
  username: String="Username *";
  password: String="Password *";
  returnUrl: string="";
  returnParams:string="{}";
  
  //for new user (register)
  // name: String="name";
  email: String="Email";
  // phone: Number;
  // confirmPassword: String;
  
  //extra UX flags
  disabled:Boolean=false;

  constructor(
    private route: ActivatedRoute,
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.router.navigate(['']);
    }

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    let loc=localStorage.getItem("destination");
    if(loc){
      this.returnUrl=loc;
      localStorage.removeItem("destination");
    }
    let locParams=localStorage.getItem("destinationParams");
    if(locParams){
      this.returnParams=locParams;
      localStorage.removeItem("destinationParams");
    }
  }

  onLoginSubmit(){

    const user = {
      username: this.username,
      password: this.password
    }
    

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        // this.flashMessage.show('You are now logged in', {
        //   cssClass: 'alert-success',
        //   timeout: 5000});
        // this.router.navigate(['dashboard']);
        this.authService.addActivity("Logged In!").subscribe();
        this.router.navigate([this.returnUrl],{queryParams:JSON.parse(this.returnParams)});
      } else {
        /* this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000}); */
        alert(data.msg);          
        this.router.navigate(['entry']);
      }
    });
  }
  
  
  onRegisterSubmit() {
    if(this.disabled){
      return;
    }
    else{
      this.disabled=true;
    }
    const user = {
      name: this.username,
      username: this.username,
      email: this.email,
      password: this.password,
      // phone: this.phone
    }

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      // this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      console.log("INVALID USER");
      this.disabled=false;
      return false;
    }
    
    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      // this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      console.log("INVALID EMAIL");
      this.email="INVALID EMAIL";
      this.disabled=false;
      return false;
    }

    // Validate Phone
    /* if (!this.validateService.validatePhone(user.phone)) {
      alert("Please enter a valid contact number");
      // this.flashMessage.show('Please enter a valid contact number', { cssClass: 'alert-danger', timeout: 3000 });
      this.disabled=false;
      return false;
    } */

    // Validate password
    if (!this.validateService.validatePassword(user.password)) {
      alert("Please enter a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter");
      // this.flashMessage.show('Please enter a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter', { cssClass: 'alert-danger', timeout: 10000 });
      console.log("INVALID PASSWORD");
      this.disabled=false;
      return false;
    }

    // Confirm password 
    /* if (!this.validateService.validateConfirmPassword(user.password, this.confirmPassword)) {
      alert("passwords don't match! Try again");
      // this.flashMessage.show("Passwords don't match. Please try again.", { cssClass: 'alert-danger', timeout: 3000 });
      this.disabled=false;
      return false;
    } */

    // Validate Username
    this.validateUsername(user.username).then((success) => {
      if (success) {
        alert("Username not available!");
        // this.flashMessage.show('Username is already taken!', { cssClass: 'alert-danger', timeout: 3000 });
        this.disabled=false;
        return false;
      } else {
        // Register user
        this.authService.registerUser(user).subscribe(data => {
          console.log(data);
          if (data.success) {
            alert("Successfully registered, You can now LOGIN!");
            // this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
            this.disabled=false;
            this.router.navigate(['/entry']);
          } else {
            alert("Something went wrong");
            // this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            this.disabled=false;
            this.router.navigate(['/entry']);
          }
        });
      }
    });
  }

  validateUsername(username) {

    const usernameData = {
      username: username
    }

    return new Promise((resolve) => {
      this.authService.validateUsername(usernameData).subscribe(data => {
        resolve(data.success);
      });
    });
  }
}
