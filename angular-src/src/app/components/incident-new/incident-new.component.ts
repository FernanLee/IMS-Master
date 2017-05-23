import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../../services/incident.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { Country } from '../../class/country';
import { Locations } from '../../class/location';
import { Categories } from '../../class/category';
import { CategoryItems } from '../../class/categoryitem';
import {AuthService} from '../../services/auth.service';
import { User } from '../../class/user';

@Component({
  selector: 'app-incident-new',
  templateUrl: './incident-new.component.html',
  styleUrls: ['./incident-new.component.css']
})


export class IncidentNewComponent implements OnInit {
 Locations: Locations[]; 
 AllUsers: User[]; 
 AllCategories: Categories[];
 ItemCategories: CategoryItems[];
 ReportedUser: Object;
 DefaultUser: string;
 

 selectedCountry: Country;
  countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil'),
     new Country(5, 'Russia')
  ];   
    _id: string;
    friendlyId: String;      
    Subject: String;   
    Patient: String;                   
    ReportedBy: String;          
    ReportedTo: String;        
    LocationOfIncident: String;      
    DateOfIncident: Date;      
    WitnessList: String;      
    incidentDescription:  String;      
    CategoryName:  String;      
    categoryItem: String;    
    CategoryOther:  String;      
    RCASummary:  String;    
    harmScore:  String;    
    PreSeverity: String;    
    preOccurence: String;  
    preRiskScore:  String;    
    lessonsLearned: String;      
    actionsTaken: String;    
    postSeverity:String;    
    postOccurence:  String;      
    postRiskScore: String;    
    incidentOpen:String;      
    notificationSend: String;     
    showSummary: Boolean;     
    statusOfIncident: String;     
    lastModified: Date;    
    modifiedBy: String;
    lastModified_Reportedby: String;   
    LastModified_LocationOfIncident: String;

  constructor(  
    private flashMessage: FlashMessagesService,
    private incidentService:IncidentService,
    private router:Router,
   private authService:AuthService
  ) {
   
   }

  ngOnInit() {
      this.selectedCountry = this.countries[1];    

       this.incidentService.GetIncidentLocation()
         .subscribe(locations => {         
           this.Locations = locations;
         },
           err => {
          console.log(err);
          return false;
         });       

      this.authService.getProfile()
        .subscribe(profile => {
          this.ReportedUser = profile.user;         
         this.ReportedBy = profile.user._id
         
        },
          err => {
          console.log(err);
          return false;
        });  

      this.incidentService.GetIncidentUsers()
        .subscribe(allusers => {
         this.AllUsers = allusers;       
         //console.log(this.AllUsers)                 
        },
          err => {
          console.log(err);
          return false;
        });  

         this.incidentService.GetIncidentCategories()
        .subscribe(allcategory => {
         this.AllCategories = allcategory;       
         //console.log(this.AllCategories)                 
        },
          err => {
          console.log(err);
          return false;
        });  

          
  }


onRegisterSubmit(){
console.log('friendlyId:'+ this.friendlyId,
    'Subject:'+  this.Subject,
    'Patient:'+ this.Patient,
    'ReportedBy:'+ this.ReportedBy,
    'ReportedTo:'+ this.ReportedTo,
    'LocationOfIncident:'+ this.LocationOfIncident,
    'DateOfIncident:'+ this.DateOfIncident,
    'WitnessList:' +this.WitnessList, 
    'incidentDescription:'+ this.incidentDescription,
    'CategoryName:' + this.CategoryName,
    'categoryItem:' +this.categoryItem,
    'CategoryOther:'+ this.CategoryOther,
    'RCASummary:' +this.RCASummary,
    'harmScore:' + this.harmScore,
    'PreSeverity:' +this.PreSeverity,
    'preOccurence:' +this.preOccurence,
    'preRiskScore:' + this.preRiskScore,
    'lessonsLearned:'+ this.lessonsLearned,
    'actionsTaken:' +this.actionsTaken,
    'postSeverity:' +this.postSeverity,
    'postOccurence:' +this.postOccurence,
    'postRiskScore:' +this.postRiskScore,
    'incidentOpen:' +this.incidentOpen,
    'notificationSend:' +this.notificationSend,
    'showSummary:'+ this.showSummary,
    'statusOfIncident:'+ this.statusOfIncident,
    'lastModified:'+ this.lastModified,
    'modifiedBy:' +this.modifiedBy,
    'lastModified_Reportedby:'+ this.lastModified_Reportedby,
    'LastModified_LocationOfIncident:'+ this.LastModified_LocationOfIncident);
 
  const incident = {
    _id: this._id,
    friendlyId: this.friendlyId,
    Subject: this.Subject,
    Patient: this.Patient,
    ReportedBy: this.ReportedBy,
    ReportedTo: this.ReportedTo,
    LocationOfIncident: this.LocationOfIncident,
    DateOfIncident: this.DateOfIncident,
    WitnessList: this.WitnessList, 
    incidentDescription: this.incidentDescription,
    CategoryName:  this.CategoryName,
    categoryItem: this.categoryItem,
    CategoryOther: this.CategoryOther,
    RCASummary: this.RCASummary,
    harmScore:  this.harmScore,
    PreSeverity: this.PreSeverity,
    preOccurence: this.preOccurence,
    preRiskScore:  this.preRiskScore,
    lessonsLearned: this.lessonsLearned,
    actionsTaken: this.actionsTaken,
    postSeverity: this.postSeverity,
    postOccurence: this.postOccurence,
    postRiskScore: this.postRiskScore,
    incidentOpen: this.incidentOpen,
    notificationSend: this.notificationSend,
    showSummary: this.showSummary,
    statusOfIncident: this.statusOfIncident,
    lastModified: this.lastModified,
    modifiedBy: this.modifiedBy,
    lastModified_Reportedby: this.lastModified_Reportedby,
    LastModified_LocationOfIncident: this.LastModified_LocationOfIncident
}


  //required Fields
  //if(!this.validateService.validateRegister(user)){
   
   //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
   // return false;
  //}

 //Validate Email
 // if(!this.validateService.validateEmail(user.email)){
   //console.log('Please use a valid email');
 //  this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
  //  return false;
  //}

  // Register Incident
  this.incidentService.registerIncident(incident).subscribe(data => {
    if(data.success){
       this.flashMessage.show('Incident successfuly submitted  ' + data[0]._id, { cssClass:'alert-success'  ,  timeout:3000} );       
      //  this.router.navigate(['/incidentrecent']);
    } else {
     // console.log('Something went wrong'+ onerror );
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
      this.router.navigate(['/incidentnew']);
    }
  });  
}

  onInputlocation($event) {
    $event.preventDefault();
    this.LocationOfIncident = $event.target.value
    //console.log('selected: ' + $event.target.value);
  }

    onInputWitness($event) {
    $event.preventDefault();
    this.WitnessList = $event.target.value
    //console.log('selected: ' + $event.target.value);
  }

    onInputCategory($event) {
    $event.preventDefault();
    this.CategoryName =  $event.target.value      


       this.incidentService.GetIncidentCategory_Item( $event.target.value )
            .subscribe(item => {
            this.ItemCategories = item;      
            this.categoryItem = item._id;        
            //console.log(this.ItemCategories);                 
            },
              err => {
              console.log(err);
              return false;
            });           
    }

    onInputcategoryItem($event) {
    $event.preventDefault();
    this.categoryItem = $event.target.value        
    //console.log('selected: ' + $event.target.value);
  }
   onInputreportedto($event) {
    $event.preventDefault();
    this.ReportedTo = $event.target.value        
    //console.log('selected: ' + $event.target.value);
  }


  
}
