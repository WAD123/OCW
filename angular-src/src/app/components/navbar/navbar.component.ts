import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AppComponent} from '../../app.component';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar-ww.component.html',
  styleUrls: ['./navbar-ww.component.css']
})
export class NavbarComponent implements OnInit {
  
  user:Object;
  
  constructor(
    private authService:AuthService,
    private appComponent:AppComponent,
    private router:Router,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    
  }
  
  onLogoutClick(){
    this.authService.addActivity("Logged out!").subscribe();
    this.authService.logout();
    this.router.navigate(['/']);
    return false;
  }
  isLoggedIn(){
    return this.authService.loggedIn();
  }
  /* isName(){
    if(this.authService.loggedIn()){
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        return true;
      },
      err => {
        console.log(err);
        return false;
      });
    }
    return false;
  } */
  isHome(){
    if(window.location.pathname=="/"){
      return true;
    }
    return false;
  }
}
