import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryManagementComponent } from './delivery-management.component';
import { DeliveryManagementAllComponent } from './delivery-management-all/delivery-management-all.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    DeliveryManagementComponent,
    DeliveryManagementAllComponent
  ],
  imports: [
    CommonModule,
    DeliveryManagementRoutingModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class DeliveryManagementModule { }
