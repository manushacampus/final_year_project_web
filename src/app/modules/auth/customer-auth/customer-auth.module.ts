import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAuthRoutingModule } from './customer-auth-routing.module';
import { CustomerAuthComponent } from './customer-auth.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";


@NgModule({
  declarations: [
    CustomerAuthComponent,
    CustomerLoginComponent,
    CustomerRegistrationComponent,
    TopBarComponent
  ],
    imports: [
        CommonModule,
        CustomerAuthRoutingModule,
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        AngularMatModule,
        AngularFormModule
    ]
})
export class CustomerAuthModule { }
