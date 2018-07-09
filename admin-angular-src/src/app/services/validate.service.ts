import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(adminuser){
    if(adminuser.name == undefined || adminuser.username == undefined || adminuser.password == undefined || adminuser.designation == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateConfirmPassword(password, confirmPassword) {
    if(password==confirmPassword) {
      return true ;
    } else {
      return false;
    }
  }

  validateCenters(centersToAdd) {
    if(centersToAdd.length) {
      return true;
    } else {
      return false;
    }
  }

  validatePassword(password) {
    const pw=  /^[A-Za-z]\w{7,14}$/;
    return pw.test(password);
  }
  
}
