import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManagementRoutingModule } from './delivery-management-routing.module';
import { DeliveryManagementComponent } from './delivery-management.component';
import { DeliveryManagementAllComponent } from './delivery-management-all/delivery-management-all.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import { ProductOrdersComponent } from './delivery-management-all/product-orders/product-orders.component';
import { QuotationOrdersComponent } from './delivery-management-all/quotation-orders/quotation-orders.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ProductOrdersViewComponent } from './product-orders-view/product-orders-view.component';
import { QuotationOrdersViewComponent } from './quotation-orders-view/quotation-orders-view.component';


@NgModule({
  declarations: [
    DeliveryManagementComponent,
    DeliveryManagementAllComponent,
    ProductOrdersComponent,
    QuotationOrdersComponent,
    ProductOrdersViewComponent,
    QuotationOrdersViewComponent
  ],
    imports: [
        CommonModule,
        DeliveryManagementRoutingModule,
        FormsModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatCardModule,
        MatSlideToggleModule
    ]
})
export class DeliveryManagementModule { }
