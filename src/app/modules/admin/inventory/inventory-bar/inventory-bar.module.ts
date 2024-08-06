import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryBarRoutingModule } from './inventory-bar-routing.module';
import {InventoryBarComponent} from "./inventory-bar.component";
import {AngularMatModule} from "../../../material/angular-mat/angular-mat.module";
import { InventoryBarFormComponent } from './inner-component/inventory-bar-form/inventory-bar-form.component';
import {AngularFormModule} from "../../../material/angular-form/angular-form.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InventoryBarComponent,
    InventoryBarFormComponent
  ],
  imports: [
    CommonModule,
    InventoryBarRoutingModule,
    AngularMatModule,
    AngularFormModule,
    ReactiveFormsModule
  ]
})
export class InventoryBarModule { }
