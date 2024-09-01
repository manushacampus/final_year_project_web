import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartAllComponent } from './inner-component/cart-all/cart-all.component';


@NgModule({
  declarations: [
    CartComponent,
    CartAllComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
