import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'

import {ValidateService} from './services/validate.service';

import {AuthService} from './services/auth.service';


import {FlashMessagesModule} from 'angular2-flash-messages';
import { ContactComponent } from './components/contact/contact.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { CafedashboardComponent } from './components/cafedashboard/cafedashboard.component';
import { BakerydashboardComponent } from './components/bakerydashboard/bakerydashboard.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'restaurants', component: RestaurantComponent},
  {path: 'dashboard2', component: CafedashboardComponent},
  {path: 'dashboard3', component: BakerydashboardComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    RestaurantComponent,
    CafedashboardComponent,
    BakerydashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    HttpModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
