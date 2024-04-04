import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryBarRoutingModule } from './inventory-bar-routing.module';
import {InventoryBarComponent} from "./inventory-bar.component";
import {AngularMatModule} from "../../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    InventoryBarComponent
  ],
  imports: [
    CommonModule,
    InventoryBarRoutingModule,
    AngularMatModule
  ]
})
export class InventoryBarModule { }
