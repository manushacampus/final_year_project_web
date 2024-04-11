import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerComponent} from "./customer.component";
import {CustomerRoutingModule} from "./customer-routing.module";
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [
    CustomerComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
