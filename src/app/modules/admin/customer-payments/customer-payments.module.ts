import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPaymentsRoutingModule } from './customer-payments-routing.module';
import { CustomerPaymentsComponent } from './customer-payments.component';
import { CustomerPaymentsAllComponent } from './customer-payments-all/customer-payments-all.component';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import { CustomerPaymentViewComponent } from './customer-payment-view/customer-payment-view.component';


@NgModule({
  declarations: [
    CustomerPaymentsComponent,
    CustomerPaymentsAllComponent,
    CustomerPaymentViewComponent
  ],
  imports: [
    CommonModule,
    CustomerPaymentsRoutingModule,
    AngularMatModule,
    AngularFormModule
  ]
})
export class CustomerPaymentsModule { }
