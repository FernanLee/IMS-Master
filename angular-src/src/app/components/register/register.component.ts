import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    //ValidateService: any;

name: String;
username: String;
email: String;
password: String;
//role: String;

  constructor(
    private validateService:ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private router:Router

    ) { }

  ngOnInit() {
  }
onRegisterSubmit(){
//console.log(this.name);
  const user = {
  name: this.name,
  email: this.email,
  username: this.username,
  password: this.password
}


  //required Fields
  if(!this.validateService.validateRegister(user)){
   //console.log('Please fill in all fields');
   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }

 //Validate Email
  if(!this.validateService.validateEmail(user.email)){
   //console.log('Please use a valid email');
   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }

  // Register User
  this.authService.registerUser(user).subscribe(data => {
    if(data.success){
        this.flashMessage.show('You are now registered and can login', {cssClass: 'alert-success', timeout:3000});     
        this.router.navigate(['/login']);
    } else {
      //console.log('Something went wrong'+ onerror );
     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
      this.router.navigate(['/register']);
    }
  });

}
}
