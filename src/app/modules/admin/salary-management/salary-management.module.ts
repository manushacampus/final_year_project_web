import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryManagementRoutingModule } from './salary-management-routing.module';
import { SalaryManagementComponent } from './salary-management.component';
import { SalaryManagementAllComponent } from './salary-management-all/salary-management-all.component';
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import { SalaryAddComponent } from './salary-add/salary-add.component';


@NgModule({
  declarations: [
    SalaryManagementComponent,
    SalaryManagementAllComponent,
    SalaryAddComponent
  ],
  imports: [
    CommonModule,
    SalaryManagementRoutingModule,
    AngularFormModule,
    AngularMatModule
  ]
})
export class SalaryManagementModule { }
