import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductWindowRoutingModule } from './product-window-routing.module';
import { ProductWindowComponent } from './product-window.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { ProductWindowListComponent } from './inner-component/product-window-list/product-window-list.component';
import { ProductWindowFormComponent } from './inner-component/product-window-form/product-window-form.component';


@NgModule({
  declarations: [
    ProductWindowComponent,
    ProductWindowListComponent,
    ProductWindowFormComponent
  ],
  imports: [
    CommonModule,
    ProductWindowRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class ProductWindowModule { }
