import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  password: String;
  designations:String[] = [];
  designation: String = "";
  

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.router.navigate(['']);
    }
  }

  onRegisterSubmit() {
    const adminuser = {
      name: this.name,
      username: this.username,
      password: this.password,
      designation: this.designation,
      admin_level: this.designations.indexOf(this.designation)
    
    }

    // Required Fields
    if (!this.validateService.validateRegister(adminuser)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate Username
    this.validateUsername(adminuser.username).then((success) => {
      if (success) {
        this.flashMessage.show('Username is already taken!', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      } else {
        // Register user
        this.authService.registerUser(adminuser).subscribe(data => {
          if (data.success) {
            this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/login']);
          } else {
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/register']);
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
      this.authService.validateAdminUsername(usernameData).subscribe(data => {
        resolve(data.success);
      });
    });
  }
}