import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementComponent } from './customer-management.component';
import { CustomerManagmentAllComponent } from './customer-management-all/customer-managment-all.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import { CustomerViewComponent } from './customer-view/customer-view.component';


@NgModule({
  declarations: [
    CustomerManagementComponent,
    CustomerManagmentAllComponent,
    CustomerViewComponent
  ],
    imports: [
        CommonModule,
        CustomerManagementRoutingModule,
        MatButtonModule,
        MatIconModule,
        AngularMatModule,
        AngularFormModule
    ]
})
export class CustomerManagementModule { }
