import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportManagementRoutingModule } from './report-management-routing.module';
import { ReportManagementComponent } from './report-management.component';
import { ReportManagementAllComponent } from './report-management-all/report-management-all.component';


@NgModule({
  declarations: [
    ReportManagementComponent,
    ReportManagementAllComponent
  ],
  imports: [
    CommonModule,
    ReportManagementRoutingModule
  ]
})
export class ReportManagementModule { }
