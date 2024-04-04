import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDoorRoutingModule } from './product-door-routing.module';
import {ProductDoorComponent} from "./product-door.component";
import { ProductDoorListComponent } from './inner-component/product-door-list/product-door-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ProductDoorFormComponent } from './inner-component/product-door-form/product-door-form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductDoorComponent,
    ProductDoorListComponent,
    ProductDoorFormComponent,
  ],
  imports: [
    CommonModule,
    ProductDoorRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class ProductDoorModule { }
