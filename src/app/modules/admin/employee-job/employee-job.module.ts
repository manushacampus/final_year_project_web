import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeJobRoutingModule } from './employee-job-routing.module';
import { EmployeeJobComponent } from './employee-job.component';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {MatDialogModule} from "@angular/material/dialog";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import { EmployeeJobViewComponent } from './employee-job-view/employee-job-view.component';
import { EmployeeJobImageComponent } from './employee-job-image/employee-job-image.component';


@NgModule({
  declarations: [
    EmployeeJobComponent,
    EmployeeJobViewComponent,
    EmployeeJobImageComponent
  ],
  imports: [
    CommonModule,
    EmployeeJobRoutingModule,
    AngularMatModule,
    AngularFormModule
  ]
})
export class EmployeeJobModule { }
