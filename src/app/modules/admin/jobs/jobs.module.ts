import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import { JobDoorComponent } from './job-door/job-door.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    JobsComponent,
    JobDoorComponent
  ],
    imports: [
        CommonModule,
        JobsRoutingModule,
        AngularMatModule,
        MatDialogModule,
        AngularFormModule,
        MatTabsModule
    ]
})
export class JobsModule { }
