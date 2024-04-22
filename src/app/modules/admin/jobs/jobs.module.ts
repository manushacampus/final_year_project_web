import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    AngularMatModule
  ]
})
export class JobsModule { }
