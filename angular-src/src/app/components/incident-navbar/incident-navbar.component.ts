import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-incident-navbar',
  templateUrl: './incident-navbar.component.html',
  styleUrls: ['./incident-navbar.component.css']
})
export class IncidentNavbarComponent implements OnInit {
  user: Object;
  constructor(
     private authService:AuthService,
      private router:Router
  ) { }

  ngOnInit() {
      this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    } );  
      
  }

onNewIncident(){
   this.router.navigate(['/incidentnew']);
}

}
