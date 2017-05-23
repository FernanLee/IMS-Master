import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

// Ensures all fields are filled out.
validateRegister(user){
if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
  return false;
  } else {
    return true;
  }
}

// Makes sure email is in correct format
validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }
}
