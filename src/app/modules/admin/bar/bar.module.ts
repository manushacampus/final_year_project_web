import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarComponent} from "./bar.component";
import {BarRoutingModule} from "./bar-routing.module";



@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    BarRoutingModule
  ]
})
export class BarModule { }
