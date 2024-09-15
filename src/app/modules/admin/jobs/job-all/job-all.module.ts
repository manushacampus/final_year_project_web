import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobAllRoutingModule } from './job-all-routing.module';
import { JobAllComponent } from './job-all.component';
import {AngularMatModule} from "../../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../../material/angular-form/angular-form.module";
import { JobEditViewComponent } from './inner-component/job-edit-view/job-edit-view.component';
import { JobQuotationViewComponent } from './inner-component/job-quotation-view/job-quotation-view.component';


@NgModule({
  declarations: [
    JobAllComponent,
    JobEditViewComponent,
    JobQuotationViewComponent
  ],
    imports: [
        CommonModule,
        JobAllRoutingModule,
        AngularMatModule,
        AngularFormModule
    ]
})
export class JobAllModule { }
