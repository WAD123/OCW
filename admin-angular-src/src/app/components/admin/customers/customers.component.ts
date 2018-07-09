import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  loading:Boolean = true;
  private customers;
  
  private reset: Number = 0;

  private name:String = "";
  private username: String = ""; 
  private phone: Number; 
  private email:String = "";

  // private alert:Number = 0;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterUsers();
  }

  filterUsers() {

    this.loading= true;

    const params = {
      name : this.name.trim(),
      username : this.username.trim(),
      email : this.email.trim(),
      phone : this.phone
    }

    this.authService.filterUsers(params).subscribe( (data) => {
      if(data.success) {
        if(data.customers.length) {
          this.customers = data.customers.reverse();
          // this.alert = 0;          
        } else {
          this.flashMessage.show('No Customers found with this search criteria', { cssClass: 'alert-danger', timeout: 5000 });  
          // this.alert=1;
          this.customers=null;
        }
      } else {
        // this.alert = 2;
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });  
        this.customers=null;
      }
      this.loading = false;
    });
    
  }

  onFilterSubmit() {
    if(this.reset!=0){
      this.name="";
      this.username="";
      this.email="";
      this.reset=0;      
    }
    this.filterUsers();
  }
  
}