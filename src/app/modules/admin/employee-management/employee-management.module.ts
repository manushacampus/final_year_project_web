import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import {MatTabsModule} from "@angular/material/tabs";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {FormsModule} from "@angular/forms";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeListComponent,
    EmployeeRegComponent
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    AngularFormModule,
    AngularMatModule
  ]
})
export class EmployeeManagementModule { }
