import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { BookingService } from '../../services/booking.service';
import { CommonService } from '../../services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KYCService } from '../../services/kyc.service';
import { Router } from '@angular/router';

import { globals } from '../../helpers/globals';
declare var jquery: any;
declare var $: any;


@Component({
	selector: 'app-kyc',
	templateUrl: './kyc.component.html',
	styleUrls: ['./kyc.component.css'],
	providers: [CommonService, KYCService]
})
export class KYCComponent implements OnInit {
	kycForm: FormGroup;
	addressProof: any = null;
	identityProof: any = null;
	photo: any = null;
	success: boolean = false;
	error: boolean = false;
	msg: String = '';
	userDetails: any;
	changedExisting:any=[];
	showImagePopup:any=[false,false,false];
	fileNames:any = ['','',''];
	constructor(fb: FormBuilder, private commonService: CommonService, private cd: ChangeDetectorRef, private kycService: KYCService, private router: Router) {
		this.kycForm = fb.group({

			'addressProofType': ['', [Validators.required]],
			'identityProofType': ['', Validators.required],


		})
	}
	focusFunction(value,index){
		this.showImagePopup = [false,false,false];
		this.showImagePopup[index] = value;
	}

	onChangePreview(event, target) {
		const reader = new FileReader();
		if(!this.changedExisting.findIndex(x=>x==target)){
			this.changedExisting.push(target);
		}
		if (event.target.files && event.target.files.length) {
			const file = event.target.files[0];
			reader.readAsDataURL(file);

			reader.onload = () => {

				target == 1 ? this.addressProof = reader.result : target == 2 ? this.identityProof = reader.result : this.photo = reader.result;
				target == 1 ? this.fileNames[0] = file.name : target == 2 ? this.fileNames[1] = file.name : this.fileNames[2] = file.name ;
				this.cd.markForCheck();
			};
		}
	}
	clearImage(target){
		target==0?this.addressProof='':target==1?this.identityProof='':this.photo='';
		target==0?this.fileNames[0]='':target==1?this.fileNames[1]='':this.fileNames[2]='';
		if(!this.changedExisting.findIndex(x=>x==target)){
			this.changedExisting.push(target);
		}
	}
	
	ngOnInit() {
		if(!localStorage.getItem('userId') && localStorage.getItem('userId')!=null){
			this.router.navigate(['/login']);
		}
		this.kycService.getUserInfo(localStorage.getItem('userId')).subscribe(res => {
			console.log(res);
			if (res.success) {
				this.userDetails = res.user;
				
				this.kycForm.patchValue({
					addressProofType: this.userDetails.addressProofType?this.userDetails.addressProofType:'',
					identityProofType: this.userDetails.identityProofType?this.userDetails.identityProofType:''
				});
				this.identityProof = this.userDetails.identityProofPath ? globals.baseUrl+this.userDetails.identityProofPath:'';
				this.addressProof = this.userDetails.addressProofPath?globals.baseUrl+this.userDetails.addressProofPath:'';
				this.photo =  this.userDetails.photoPath?globals.baseUrl+this.userDetails.photoPath:'';
				let identityProofFile = this.identityProof ? this.identityProof.split('/').pop():'';
				let addressProofFile = this.addressProof ? this.addressProof.split('/').pop():'';
				let photoFile = this.photo ? this.photo.split('/').pop():'';
				// console.log(identityProofFile);
				this.fileNames = [addressProofFile,identityProofFile,photoFile];

			}

		})
		
	}
	closeModal() {
		this.success = false;
		this.error = false;
	}
	submitForm(formValues): void {
		this.error = false;
		this.success = false;
		let values = {
			...formValues,
			photo: this.photo,
			identityProof: this.identityProof,
			addressProof: this.addressProof,
			username: localStorage.getItem("username"),
			email: localStorage.getItem("email"),
			changedExisting:this.changedExisting
		}
		this.kycService.uploadKYC(values).subscribe(res => {
			console.log(res);
			if (res.success) {
				this.success = true;
				this.msg = "KYC updated successfully";
			}
			else {
				this.error = true;
				this.msg = "Error while updating KYC.Please try again";
			}
		})

	}

}
