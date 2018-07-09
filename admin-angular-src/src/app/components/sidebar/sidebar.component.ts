import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  adminuser: Object;


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProfile().then((adminuser) => {
      this.adminuser = adminuser;
    });
  }

  getProfile() {
    return new Promise((resolve) => {
      const adminuser = localStorage.getItem("adminuser") && localStorage.getItem("adminuser")!="undefined"?JSON.parse(localStorage.getItem("adminuser")):undefined;
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

}
