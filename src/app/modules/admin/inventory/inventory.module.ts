import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import {InventoryComponent} from "./inventory.component";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";


@NgModule({
  declarations: [
    InventoryComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    AngularMatModule,
    AngularFormModule
  ]
})
export class InventoryModule { }
