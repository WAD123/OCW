import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
// import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  adminuser: Object;
  
  
  constructor(
    private authService:AuthService,
    private router:Router,
    // private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.getProfile().then((adminuser) => {
      this.adminuser = adminuser;
    });
  }

  getProfile() {
    return new Promise((resolve) => {
      const adminuser = localStorage.getItem("adminuser") &&localStorage.getItem("adminuser")!="undefined"? JSON.parse(localStorage.getItem("adminuser")):undefined;
      
      if(adminuser){
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
      }
    });
    
  }

  onLogoutClick(){
    this.authService.logout();
    // this.flashMessage.show('You are logged out', {
    //   cssClass:'alert-success',
    //   timeout: 3000
    // });
    this.router.navigate(['/login']);
    return false;
  }
}
