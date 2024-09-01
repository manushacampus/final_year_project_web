import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { ProfileComponent } from './inner-component/profile/profile.component';
import { MyOrdersComponent } from './inner-component/my-orders/my-orders.component';
import { MyQuotationComponent } from './inner-component/my-quotation/my-quotation.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    ProfileComponent,
    MyOrdersComponent,
    MyQuotationComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
