import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

  //private centers: String[] = [];
  //private inventory;
  private center: String ="";
  selectedCenters:Boolean[]=[];
  updatedCenters: String [] = [];

  adminuser:Object;
  otheradmins:any;
  admins:any;
  editUser:Boolean [] = [false];
  designations:String[] = [];
  designationsToDisplay: String[] = [];

  designation:String = "";
  name: String = "";
  book_approve: Boolean = false;
  book_add: Boolean = false;
  book_delete: Boolean = false;
  adminuser_create: Boolean = false;
  adminuser_modify: Boolean = false;
  adminuser_delete: Boolean = false;
  reports_view: Boolean = false;
  manage_inventory: Boolean = false;
  adminData:Object;
  
  
  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProfile().then((adminuser) => {

      this.adminuser = adminuser;
      
      if (!adminuser['adminuser_modify'] && !adminuser['adminuser_delete']) {
        this.flashMessage.show('Access Denied', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/profile']);
      }

      this.authService.getGlobalDesignations().subscribe((data) => {
        this.designations = data.globalDesignations;
        for (var i = adminuser['admin_level']+1; i < this.designations.length; i++) {
          this.designationsToDisplay.push(this.designations[i]);
        }
      });

      this.adminData = {
        admin_level: adminuser['admin_level'],
        centers : adminuser['center']
      }

      this.getOtherAdmins(this.adminData).then((otheradmins) => {
        this.otheradmins = otheradmins;
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

  getInventory() {
    return new Promise((resolve) => {
      this.authService.getInfo().subscribe((info) => {
        resolve(info.inventory);
      });
    });
  }

  getOtherAdmins(adminDetails) {
    return new Promise( (resolve) => {
      this.authService.getOtherAdmins(adminDetails).subscribe( (otheradmins) => {
        resolve(otheradmins.otheradmins);
      });
    });
  }

  toggleEditUser(id) {
    this.editUser[id] = !this.editUser[id];
    if(this.editUser[id]) {
      for (let otheradmin of this.otheradmins) {
        if(id == otheradmin._id) {
          this.name = otheradmin.name;
          this.designation = otheradmin.designation;
          this.book_add = otheradmin.book_add;
          this.book_approve = otheradmin.book_approve;
          this.book_delete = otheradmin.book_delete;
          this.adminuser_create = otheradmin.adminuser_create;
          this.adminuser_modify = otheradmin.adminuser_modify;
          this.adminuser_delete = otheradmin.adminuser_delete;
          this.reports_view = otheradmin.reports_view;
          this.manage_inventory = otheradmin.manage_inventory;
        

          for (let i=0; i<this.adminuser['center'].length; i++) {
            if(otheradmin.center.includes(this.adminuser['center'][i])) {
              this.selectedCenters[i] = true;
             } else {
              this.selectedCenters[i] = false;
             }
          }
          console.log(otheradmin.name+this.selectedCenters);
          break;
        }
      }
    }
  }

  updateUserSubmit(id) {

   new Promise( (resolve, reject) => {
      var centersToAdd:String[] = []; 
        for (let i = 0; i < this.adminuser['center'].length; i++) {
          if (this.selectedCenters[i]) {
            centersToAdd.push(this.adminuser['center'][i]);
          }
        }
        this.updatedCenters = centersToAdd;
        resolve(centersToAdd);
      }).then( (centersToAdd) => {
        if (!this.validateService.validateCenters(centersToAdd)) {
          this.flashMessage.show('Please select atleast 1 center!', { cssClass: 'alert-danger', timeout: 3000 });
          return false;
        } else {
          this.updateUser(id);
        }
      });
  }

  updateUser(id) {
    
    const adminuser = {
      admin_id: id,
      name: this.name,
      book_approve: this.book_approve,
      book_add: this.book_add,
      book_delete: this.book_delete,
      adminuser_create: this.adminuser_create,
      adminuser_modify: this.adminuser_modify,
      adminuser_delete: this.adminuser_delete,
      reports_view: this.reports_view,
      manage_inventory: this.manage_inventory,
      designation: this.designation,
      admin_level: this.designations.indexOf(this.designation),
      center: this.updatedCenters
    }
    
    this.authService.updateUser(adminuser).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Admin User details updated successfully!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      }
    });

    this.editUser[id] = !this.editUser[id];

    this.getOtherAdmins(this.adminData).then( (otheradmins) => {
        this.otheradmins = otheradmins;
    });
  }

  delete_otheradmin(id) {
    if (confirm("Delete action cannot be undone. Are you sure?")) {
      
      const admin_id = {
        id: id
      }
      
      this.authService.deleteUser(admin_id).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Admin Deleted!', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
      
      this.getOtherAdmins(this.adminData).then( (otheradmins) => {
        this.otheradmins = otheradmins;
       });
    }
  }

}