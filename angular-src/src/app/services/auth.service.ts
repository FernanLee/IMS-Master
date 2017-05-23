import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import  "rxjs/operator/map";
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;


  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
    //return this.http.post('users/register', user,{headers: headers})
       .map(res => res.json());
       
  }
  authenticateUser(user) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      //return this.http.post('users/authenticate', user,{headers: headers})
       .map(res => res.json());
  }

  getProfile(){
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      //return this.http.get('users/profile', {headers: headers})
       .map(res => res.json());

  }

  storeUserData(_token,user){    
    //localStorage.setItem('id_token',_token );
    localStorage.setItem('token',_token );
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = _token;
    this.user = user;
  }

  loadToken(){
    //console.log(localStorage.getItem('id_token'));
    const _token = localStorage.getItem('token');
    this.authToken = _token;
  }


  loggedIn(){              
    return tokenNotExpired();    
    //return true;
  }


  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}

