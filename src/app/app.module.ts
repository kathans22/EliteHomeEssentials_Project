import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { HomeModule } from './home/home.module';
import { HelloComponent } from './hello/hello.component';
import { BoilerComponent } from './boiler/boiler.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { PumpfanComponent } from './pumpfan/pumpfan.component';
import { FireComponent } from './fire/fire.component';
//import { PumpfanComponent } from './pumpfan/pumpfan.component';
import { LoginComponent } from './login/login.component';
import { Feedback1Component } from './feedback1/feedback1.component';
import { ShowDetailComponent } from './showdetail/showdetail.component';
import { P2Component } from './p2/p2.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HelloComponent,
    BoilerComponent,
    ElectricalComponent,
    PlumbingComponent,
    PumpfanComponent,
    FireComponent,
    Feedback1Component,
    ShowDetailComponent,
    P2Component


  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
