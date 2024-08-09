import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationManagementRoutingModule } from './quotation-management-routing.module';
import { QuotationManagementComponent } from './quotation-management.component';
import { QuotationManagementAllComponent } from './quotation-management-all/quotation-management-all.component';
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    QuotationManagementComponent,
    QuotationManagementAllComponent
  ],
  imports: [
    CommonModule,
    QuotationManagementRoutingModule,
    AngularFormModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class QuotationManagementModule { }
