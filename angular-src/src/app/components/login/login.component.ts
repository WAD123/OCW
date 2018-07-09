import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //for existing user (login)
  username: String="";
  password: String="";
  returnUrl: string="";
  returnParams:string="{}";

  constructor(
    private route: ActivatedRoute,
    private authService:AuthService,
    private router:Router,
    private validateService: ValidateService
  ) { }

  ngOnInit() {

    if(this.authService.loggedIn()){
      this.router.navigate(['']);
    }

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    let loc=localStorage.getItem("destination");
    if(loc){
      this.returnUrl=loc;
      localStorage.removeItem("destination");
    }
    let locParams=localStorage.getItem("destinationParams");
    if(locParams){
      this.returnParams=locParams;
      localStorage.removeItem("destinationParams");
    }
  }

  onLoginSubmit(){
    
        const user = {
          username: this.username,
          password: this.password
        }
        
    
        this.authService.authenticateUser(user).subscribe(data => {
          if(data.success){
            this.authService.storeUserData(data.token, data.user);
            // this.flashMessage.show('You are now logged in', {
            //   cssClass: 'alert-success',
            //   timeout: 5000});
            // this.router.navigate(['dashboard']);
            this.authService.addActivity("Logged In!").subscribe();
            this.router.navigate([this.returnUrl],{queryParams:JSON.parse(this.returnParams)});
          } else {
            /* this.flashMessage.show(data.msg, {
              cssClass: 'alert-danger',
              timeout: 5000}); */
            alert(data.msg);          
            this.router.navigate(['login']);
          }
        });
      }

}
