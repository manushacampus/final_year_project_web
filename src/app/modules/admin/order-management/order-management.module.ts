import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderManagementRoutingModule } from './order-management-routing.module';
import { OrderManagementComponent } from './order-management.component';
import { CustomerOrderAllComponent } from './customer-order-all/customer-order-all.component';
import { CustomerOrderViewComponent } from './customer-order-view/customer-order-view.component';
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    OrderManagementComponent,
    CustomerOrderAllComponent,
    CustomerOrderViewComponent
  ],
  imports: [
    CommonModule,
    OrderManagementRoutingModule,
    AngularFormModule,
    AngularMatModule
  ]
})
export class OrderManagementModule { }
