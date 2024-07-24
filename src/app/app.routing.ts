import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from "./landing/landing.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from './login/login.component';
import { ContactComponent } from "./contact/contact.component";
import { BoilerComponent } from "./boiler/boiler.component";
import { ElectricalComponent } from "./electrical/electrical.component";
import { PlumbingComponent } from "./plumbing/plumbing.component";
import { PumpfanComponent } from "./pumpfan/pumpfan.component";
import { FireComponent } from "./fire/fire.component";
import { ShowDetailComponent } from "./showdetail/showdetail.component";

const routes: Routes = [
  { path: "landing", component: HomeComponent },
  { path: "user-profile", component: ProfileComponent },
  { path: 'register',           component: SignupComponent },
  { path: "home", component: LandingComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "boiler", component: BoilerComponent },
  { path: "electrical", component: ElectricalComponent },
  { path: "plumbing", component: PlumbingComponent },
  { path: "pumpfan", component: PumpfanComponent },
  { path: "fire", component: FireComponent },
  { path: "showdetail", component: ShowDetailComponent },
  { path: 'login',          component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
