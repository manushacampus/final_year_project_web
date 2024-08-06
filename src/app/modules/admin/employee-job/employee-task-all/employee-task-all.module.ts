import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { EmployeeTaskAllRoutingModule } from './employee-task-all-routing.module';
import { EmployeeTaskAllComponent } from './employee-task-all.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    EmployeeTaskAllComponent
  ],
  imports: [
    CommonModule,
    EmployeeTaskAllRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
    providers: [DatePipe]
})
export class EmployeeTaskAllModule { }
