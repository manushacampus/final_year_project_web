import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoorComponent} from "./door.component";
import {DoorRoutingModule} from "./door-routing.module";



@NgModule({
  declarations: [
    DoorComponent
  ],
  imports: [
    CommonModule,
    DoorRoutingModule
  ]
})
export class DoorModule { }
