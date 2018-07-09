import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // for new user (register)
  name: String="";
  email: String="";
  phone: Number;
  confirmPassword: String;

  username: String="";
  password: String="";
  returnUrl: string="";
  returnParams:string="{}";

  //extra UX flags
  disabled:Boolean=false;

  constructor(
    private route: ActivatedRoute,
    private authService:AuthService,
    private router:Router,
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

  onRegisterSubmit() {
    if(this.disabled){
      return;
    }
    else{
      this.disabled=true;
    }
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      phone: this.phone
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
    if (!this.validateService.validatePhone(user.phone)) {
      alert("Please enter a valid contact number");
      // this.flashMessage.show('Please enter a valid contact number', { cssClass: 'alert-danger', timeout: 3000 });
      this.disabled=false;
      return false;
    }

    // Validate password
    if (!this.validateService.validatePassword(user.password)) {
      alert("Please enter a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter");
      // this.flashMessage.show('Please enter a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter', { cssClass: 'alert-danger', timeout: 10000 });
      console.log("INVALID PASSWORD");
      this.disabled=false;
      return false;
    }

    // Confirm password 
    if (!this.validateService.validateConfirmPassword(user.password, this.confirmPassword)) {
      alert("passwords don't match! Try again");
      // this.flashMessage.show("Passwords don't match. Please try again.", { cssClass: 'alert-danger', timeout: 3000 });
      this.disabled=false;
      return false;
    }

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
            this.router.navigate(['/login']);
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
