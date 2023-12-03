import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowsComponent } from './windows.component';
import {WindowsRoutingModule} from "./windows.routing.module";



@NgModule({
  declarations: [
    WindowsComponent
  ],
  imports: [
    CommonModule,
    WindowsRoutingModule
  ]
})
export class WindowsModule { }
