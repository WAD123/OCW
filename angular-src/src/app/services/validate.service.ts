import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    // if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.phone == undefined || user.confirmPassword){
    if(user.username == undefined || user.email == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateProfile(user) {
    if(user.name == undefined || user.email == undefined ||user.phone == undefined ){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password) {
    const pw=  /^[A-Za-z]\w{7,14}$/;
    return pw.test(password);
  }

  validatePhone(phone_number) {
    if(phone_number.length==10) {
      return true;
    } 
  }
  
  validateConfirmPassword(password, confirmPassword) {
    if(password==confirmPassword) {
      return true ;
    } else {
      return false;
    }
  }
  
}
