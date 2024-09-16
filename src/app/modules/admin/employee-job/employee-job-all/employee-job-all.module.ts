import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { EmployeeJobAllRoutingModule } from './employee-job-all-routing.module';
import { EmployeeJobAllComponent } from './employee-job-all.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    EmployeeJobAllComponent,
  ],
    imports: [
        CommonModule,
        EmployeeJobAllRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
    ],
  providers: [DatePipe]
})
export class EmployeeJobAllModule { }
