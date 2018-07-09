import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  loading:Boolean=false;
  private adminuser;
  private inventory;
  private plan_duration: Number;
  editInventory: Boolean[] = [false];

  private hotdesk_price = {
    _1DP: Number,
    _4DP: Number,
    _10DP: Number
  }
  private permanentbook_price = {
    _18DP: Number,
    _30DP: Number
  }
  private meetingroom_price = {
    price: Number,
    total: Number
  }
  private total_seats;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading=true;

    this.getProfile().then((adminuser) => {

      this.adminuser = adminuser;

      this.getInventory().then((inventory) => {
        this.inventory = inventory;
        this.loading=false;
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

  toggleEditInventory(id) {
    this.editInventory[id] = !this.editInventory[id];
    if (this.editInventory[id]) {
      for (let eachInventory of this.inventory) {
        if (id == eachInventory._id) {

          this.plan_duration = eachInventory.plan_duration;

          this.hotdesk_price._1DP = eachInventory.hotdesk_price._1DP;
          this.hotdesk_price._4DP = eachInventory.hotdesk_price._4DP;
          this.hotdesk_price._10DP = eachInventory.hotdesk_price._10DP;

          this.permanentbook_price._18DP = eachInventory.permanentbook_price._18DP;
          this.permanentbook_price._30DP = eachInventory.permanentbook_price._30DP;

          this.meetingroom_price.price = eachInventory.meetingroom_price.price;
          this.meetingroom_price.total = eachInventory.meetingroom_price.total; 

          this.total_seats = eachInventory.total_seats;

          break;
        }
      }
    }
  }

  updateInventory(id) {

    if (confirm("Update Inventory?")) {

      const inventory = {
        inventory_id: id,
        hotdesk_price: this.hotdesk_price,
        permanentbook_price: this.permanentbook_price,
        meetingroom_price: this.meetingroom_price,
        total_seats: this.total_seats,
        plan_duration: this.plan_duration

      }

      this.authService.updateInventory(inventory).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Inventory details updated successfully!', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });

      this.editInventory[id] = !this.editInventory[id];

      this.getInventory().then((inventory) => {
        this.inventory = inventory;
      });
    }

  }


}