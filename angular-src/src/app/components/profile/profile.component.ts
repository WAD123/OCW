import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile-ww.component.html',
  styleUrls: ['./profile-ww.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  editpw: Boolean = false;
  editProfile: Boolean = false;
  name : String;
  email: String;
  phone : Number;
  currentPassword : String;
  newPassword: String;
  confirmPassword: String;
  allActivities: Object[]=[];

  sidebarNumber:Number=0;

  constructor(
    private authService:AuthService, 
    private router:Router,
    private flashMessage:FlashMessagesService,
    private validateService:ValidateService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.getAllActivities(profile.user._id);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  toggleEditpw() {
    this.editpw = !this.editpw;
  }

  toggleEditProfile(user) {
    this.editProfile = !this.editProfile;
    
    if(this.editProfile) {
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
    }
  }

  updateProfile(id) {

    const user = {
      user_id: id,
      name: this.name,
      email: this.email,
      phone: this.phone
    }

    // Required Fields
    if (!this.validateService.validateProfile(user)) {
      // this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      // this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate Phone
    if (!this.validateService.validatePhone(user.phone)) {
      // this.flashMessage.show('Please enter a valid contact number', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.authService.updateProfile(user).subscribe(data => {
      if(data.success){
        this.authService.addActivity("Updated Profile!").subscribe();
        // this.flashMessage.show('Profile updated successfully!', {cssClass: 'alert-success', timeout: 3000});
        this.getAllActivities(this.user["_id"]);
      } else {
        // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });

    this.editProfile = !this.editProfile;

    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });
  }

  updatePassword(id) {

    // Validate password
    if (!this.validateService.validatePassword(this.newPassword)) {
      // this.flashMessage.show('Please enter a password between starting with a letter having 7 to 16 characters which contain only characters, numeric digits, underscore', { cssClass: 'alert-danger', timeout: 10000 });
      return false;
    }

    // Confirm password 
    if (!this.validateService.validateConfirmPassword(this.newPassword, this.confirmPassword)) {
      // this.flashMessage.show("Passwords don't match. Please try again.", { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    const user = {
      user_id : id,
      currentPassword : this.currentPassword,
      newPassword : this.newPassword,
      confirmPassword : this.confirmPassword
    }

    this.authService.changePassword(user).subscribe(data => {
      if (data.success) {
        // this.flashMessage.show('Password changed successfully!', { cssClass: 'alert-success', timeout: 3000 });
        this.authService.addActivity("Updated Password!").subscribe();
        this.getAllActivities(this.user["_id"]);
      } else if (!data.isMatch) {
        // this.flashMessage.show("Current Password doesn't match!", { cssClass: 'alert-danger', timeout: 3000 });
      } else {
        // this.flashMessage.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

    this.toggleEditpw();
        
  }

  
  getAllActivities(id){
    this.authService.getActivities().subscribe((data) => {
      if(!data.success){
        console.log("FAILED");
      }
      else{
        this.allActivities=data.data[0].activities;
      }
    });
  }

}