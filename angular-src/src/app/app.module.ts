// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
// incident related
//import { IncidentComponent } from './components/incident/incident.component';
import { IncidentRecentComponent } from './components/incident-recent/incident-recent.component';
import { IncidentReviewComponent } from './components/incident-review/incident-review.component';
import { IncidentHistoryComponent } from './components/incident-history/incident-history.component';
import { IncidentReportComponent } from './components/incident-report/incident-report.component';
import { IncidentNewComponent } from './components/incident-new/incident-new.component';

// Services
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { IncidentNavbarComponent } from './components/incident-navbar/incident-navbar.component';
import {IncidentService} from './services/incident.service';



const appRoutes: Routes = [
{path:'', component: HomeComponent},
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
//{path:'incident', component: IncidentComponent, canActivate:[AuthGuard]},
{path:'incidentrecent', component: IncidentRecentComponent, canActivate:[AuthGuard]},
{path:'incidentreview', component: IncidentReviewComponent, canActivate:[AuthGuard]},
{path:'incidenthistory', component: IncidentHistoryComponent, canActivate:[AuthGuard]},
{path:'incidentreport', component: IncidentReportComponent, canActivate:[AuthGuard]},
{path:'settings', component: SettingsComponent, canActivate:[AuthGuard]},
{path:'incidentnew', component: IncidentNewComponent, canActivate:[AuthGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    //IncidentComponent,
    IncidentRecentComponent,
    IncidentReviewComponent,
    IncidentHistoryComponent,
    IncidentReportComponent,
    SettingsComponent,
    IncidentNewComponent,
    IncidentNavbarComponent


   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
     FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, IncidentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
