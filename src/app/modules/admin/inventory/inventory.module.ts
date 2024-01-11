import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import {InventoryComponent} from "./inventory.component";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    InventoryComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    AngularMatModule
  ]
})
export class InventoryModule { }
