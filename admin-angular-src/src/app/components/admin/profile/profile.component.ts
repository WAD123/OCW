import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validate.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading:Boolean=false;
  adminuser:Object;
  editpw: Boolean = false;
  currentPassword : String = "";
  newPassword: String = "";
  confirmPassword: String = "";
  

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private validateService:ValidateService
  ) { }

  ngOnInit() {
    this.loading=true;
    this.getProfile().then( (adminuser)=> {
      this.adminuser = adminuser;
      this.loading=false;
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

  toggleEditpw() {
    this.editpw = !this.editpw;
  }

  updatePassword() {
    // Validate password
    if (!this.validateService.validatePassword(this.newPassword)) {
      this.flashMessage.show('Please enter a password between starting with a letter having 7 to 16 characters which contain only characters, numeric digits, underscore', { cssClass: 'alert-danger', timeout: 10000 });
      return false;
    }

    // Confirm password 
    if (!this.validateService.validateConfirmPassword(this.newPassword, this.confirmPassword)) {
      this.flashMessage.show("Passwords don't match. Please try again.", { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    const adminuser = {
      adminuser_id : this.adminuser['id'],
      currentPassword : this.currentPassword,
      newPassword : this.newPassword,
      confirmPassword : this.confirmPassword
    }

    this.authService.changePassword(adminuser).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Password changed successfully!', { cssClass: 'alert-success', timeout: 5000 });
        //this.authService.addActivity("Updated Password!").subscribe();
        //this.getAllActivities(this.user["_id"]);
      } else if (!data.isMatch) {
        this.flashMessage.show("Current Password doesn't match!", { cssClass: 'alert-danger', timeout: 5000 });
      } else {
        this.flashMessage.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 5000 });
      }
    });
    this.toggleEditpw();       
  }

}