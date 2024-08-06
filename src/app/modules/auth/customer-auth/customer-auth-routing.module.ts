import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerAuthComponent} from "./customer-auth.component";
import {CustomerLoginComponent} from "./customer-login/customer-login.component";
import {CustomerRegistrationComponent} from "./customer-registration/customer-registration.component";

const routes: Routes = [
  {
  path: '', component: CustomerAuthComponent, children: [
  { path: 'login', component: CustomerLoginComponent },
  { path: 'register', component: CustomerRegistrationComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAuthRoutingModule { }
