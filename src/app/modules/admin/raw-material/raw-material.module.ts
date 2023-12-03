import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RawMaterialComponent} from "./raw-material.component";
import {RawMaterialRoutingModule} from "./raw-material.routing.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {BarComponent} from "./inner-component/bar/bar.component";



@NgModule({
  declarations: [
    RawMaterialComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    RawMaterialRoutingModule,
    AngularMatModule,
    MatButtonToggleModule,
  ]
})
export class RawMaterialModule { }
