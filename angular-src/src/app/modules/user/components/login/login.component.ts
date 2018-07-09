import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {globals} from '../../helpers/globals';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../../assets/css/login.css',
  './login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailPattern:any = globals.emailPattern;
  constructor(fb: FormBuilder,private authService:AuthService,private router:Router) {
    this.loginForm = fb.group({
      
      'email': ['',[ Validators.required,Validators.pattern(this.emailPattern)]],
      'password': ['', Validators.required]
    })
  }
  submitForm(formVal){
    console.log(formVal);
    this.authService.login(formVal).subscribe(res => {
			if(res.success){
          localStorage.setItem("token",res.token);
          localStorage.setItem("username",res.user?res.user.username:'');
          localStorage.setItem("email",res.user?res.user.email:'');
          localStorage.setItem("userId",res.user?res.user.id:'');
          this.router.navigate(['/user/profile']);
      }
		});
  }
  
  ngOnInit() {
  }

  routrURL(url: String): void {
		this.router.navigate([url]);
	}

}
