import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})

export class CreateuserComponent implements OnInit {
  loading:Boolean=true;
  private centers: String[] = [];
  private updatedCenters: String[] = [];
  private inventory;
  private selectedCenters: Boolean[] = [false];

  designations: String[] = [];
  designation: String = "";
  designationsToDisplay: String[] = [];
  adminuser: Object;
  name: String;
  username: String;
  password: String;
  confirmPassword: String;

  // Permissions 
  book_approve: Boolean = false;
  book_add: Boolean = false;
  book_delete: Boolean = false;
  adminuser_create: Boolean = false;
  adminuser_modify: Boolean = false;
  adminuser_delete: Boolean = false;
  reports_view: Boolean = false;
  manage_inventory: Boolean = false;


  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProfile().then((adminuser) => {

      this.adminuser = adminuser;

      if (!adminuser['adminuser_create']) {
        this.flashMessage.show('Access Denied', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/profile']);
      }

      this.authService.getGlobalDesignations().subscribe((data) => {
        this.designations = data.globalDesignations;
        for (var i = adminuser['admin_level'] + 1; i < this.designations.length; i++) {
          this.designationsToDisplay.push(this.designations[i]);
        }
        this.designation = this.designationsToDisplay[0];
        this.loading=false;
      });

      this.centers = adminuser['center'];
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

  getInventory() {
    return new Promise((resolve) => {
      this.authService.getInfo().subscribe((info) => {
        resolve(info.inventory);
      });
    });
  }

  onCreateSubmit() {

    new Promise((resolve, reject) => {
      var centersToAdd: String[] = [];
      for (let i = 0; i < this.centers.length; i++) {
        if (this.selectedCenters[i]) {
          centersToAdd.push(this.centers[i]);
        }
      }
      this.updatedCenters = centersToAdd;
      resolve(centersToAdd);
    }).then((centersToAdd) => {
      if (!this.validateService.validateCenters(centersToAdd)) {
        this.flashMessage.show('Please select atleast 1 center!', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      } else {
        this.createuser();
      }
    });
  }

  createuser() {

    const adminuser = {
      name: this.name,
      username: this.username,
      password: this.password,
      book_approve: this.book_approve,
      book_add: this.book_add,
      book_delete: this.book_delete,
      adminuser_create: this.adminuser_create,
      adminuser_modify: this.adminuser_modify,
      adminuser_delete: this.adminuser_delete,
      reports_view: this.reports_view,
      manage_inventory: (this.manage_inventory && this.adminuser['manage_inventory']), // to check if admin actually has the permission first before assigning
      designation: this.designation,
      admin_level: this.designations.indexOf(this.designation),
      center: this.updatedCenters
    }

    // Required Fields
    if (!this.validateService.validateRegister(adminuser)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Confirm password 
    if (!this.validateService.validateConfirmPassword(adminuser.password, this.confirmPassword)) {
      this.flashMessage.show("Passwords don't match. Please try again.", { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate Username
    this.validateUsername(adminuser.username).then((success) => {
      if (success) {
        this.flashMessage.show('Username is already taken! Please try another username', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      } else {
        // Register user
        this.authService.registerUser(adminuser).subscribe(data => {
          if (data.success) {
            this.flashMessage.show('User Registered', { cssClass: 'alert-success', timeout: 3000 });
          } else {
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
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