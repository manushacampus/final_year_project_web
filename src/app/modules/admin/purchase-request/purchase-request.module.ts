import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRequestRoutingModule } from './purchase-request-routing.module';
import { PurchaseRequestComponent } from './purchase-request.component';
import { PurchaseRequestAllComponent } from './purchase-request-all/purchase-request-all.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    PurchaseRequestComponent,
    PurchaseRequestAllComponent
  ],
  imports: [
    CommonModule,
    PurchaseRequestRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class PurchaseRequestModule { }
