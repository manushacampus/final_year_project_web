import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { ProfileComponent } from './inner-component/profile/profile.component';
import { MyOrdersComponent } from './inner-component/my-orders/my-orders.component';
import { MyQuotationComponent } from './inner-component/my-quotation/my-quotation.component';
import {FormsModule} from "@angular/forms";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import { FeedabackComponent } from './inner-component/feedaback/feedaback.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    ProfileComponent,
    MyOrdersComponent,
    MyQuotationComponent,
    FeedabackComponent
  ],
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        FormsModule,
        AngularFormModule,
        AngularMatModule,
    ]
})
export class MyProfileModule { }
