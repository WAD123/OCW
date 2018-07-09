import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { globals } from '../../helpers/globals';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['../../../../../assets/css/login.css','./register.component.css'],
	providers:[AuthService]
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	errMsg:string = '';
	isError:boolean = false;
	emailPattern: any = globals.emailPattern;
	constructor(fb: FormBuilder, public authService: AuthService,private router:Router) {
		this.registerForm = fb.group({
			'username': ['', Validators.required],
			'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
			'password': ['', Validators.required]
		})
	}
	submitForm(formVal) {
		this.isError = false;
		console.log(formVal);
		this.authService.register(formVal).subscribe(res => {
			if(res.success){
				this.router.navigate(['/login']);
			}
			else{
				this.isError = true;
				this.errMsg = res.msg; 
			}
		});
	}

	ngOnInit() {




	}

	routrURL(url: String): void {
		this.router.navigate([url]);
	}

}
