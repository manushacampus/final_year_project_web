import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobAllRoutingModule } from './job-all-routing.module';
import { JobAllComponent } from './job-all.component';


@NgModule({
  declarations: [
    JobAllComponent
  ],
  imports: [
    CommonModule,
    JobAllRoutingModule
  ]
})
export class JobAllModule { }
