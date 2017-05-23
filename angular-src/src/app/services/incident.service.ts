import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import  "rxjs/operator/map";
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class IncidentService {
 
 authToken: any;

  constructor(private http:Http) { }

  registerIncident(incident){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/incidents/newincident', incident,{headers: headers})
    //return this.http.post('users/register', user,{headers: headers})
       .map(res => res.json());
       
  }

  GetIncidentLocation(){
    //  let headers = new Headers();
    //  this.loadToken();
    // headers.append('Authorization', this.authToken);
    // headers.append('Content-Type','application/json');
    //  return this.http.get('http://localhost:3000/incidents/location', {headers: headers})    
    //  return this.http.get('http://localhost:3000/incidents/location') 
      return this.http.get('http://localhost:3000/locations/locations')    
       .map(res => res.json());       
  }

  GetIncidentUsers(){
    //  let headers = new Headers();
    //  this.loadToken();
    // headers.append('Authorization', this.authToken);
    // headers.append('Content-Type','application/json');
    //  return this.http.get('http://localhost:3000/incidents/location', {headers: headers})    
    //  return this.http.get('http://localhost:3000/incidents/location') 
      return this.http.get('http://localhost:3000/users/users')    
       .map(res => res.json());       
  }

  GetIncidentCategories(){
    //  let headers = new Headers();
    //  this.loadToken();
    // headers.append('Authorization', this.authToken);
    // headers.append('Content-Type','application/json');
    //  return this.http.get('http://localhost:3000/incidents/location', {headers: headers})    
    //  return this.http.get('http://localhost:3000/incidents/location') 
      return this.http.get('http://localhost:3000/categories/categories')    
       .map(res => res.json());       
  }

 GetIncidentCategory_Item(id){
    //  let headers = new Headers();
    //  this.loadToken();
    // headers.append('Authorization', this.authToken);
    // headers.append('Content-Type','application/json');
    //  return this.http.get('http://localhost:3000/incidents/location', {headers: headers})    
    //  return this.http.get('http://localhost:3000/incidents/location') 
      return this.http.get('http://localhost:3000/categoryitems/categoryitem/'+id)    
       .map(res => res.json()); 
       
  }


   loadToken(){
 
    const _token = localStorage.getItem('token');
    this.authToken = _token;
  }

 
}
