import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierManagementRoutingModule } from './supplier-management-routing.module';
import { SupplierManagementComponent } from './supplier-management.component';
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import { SupplierManagementAllComponent } from './supplier-management-all/supplier-management-all.component';


@NgModule({
  declarations: [
    SupplierManagementComponent,
    SupplierManagementAllComponent
  ],
  imports: [
    CommonModule,
    SupplierManagementRoutingModule,
    AngularFormModule,
    AngularMatModule
  ]
})
export class SupplierManagementModule { }
