import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryAllRoutingModule } from './inventory-all-routing.module';
import {InventoryAllComponent} from "./inventory-all.component";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    InventoryAllComponent
  ],
  imports: [
    CommonModule,
    InventoryAllRoutingModule,
    AngularMatModule
  ]
})
export class InventoryAllModule { }
