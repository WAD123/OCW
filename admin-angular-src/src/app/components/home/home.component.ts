import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn:Boolean=false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      // console.log("LOGGED IN");
      this.isLoggedIn=true;
    } else {
      // console.log("NOT LOGGED IN");
      // this.router.navigate(['/login']);
      this.isLoggedIn=false;
    }
  }
  

}
