import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarSectionComponent} from "./bar-section.component";
import {BarSectionRoutingModule} from "./bar-section-routing.module";
import {AngularMatModule} from "../../../../material/angular-mat/angular-mat.module";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    BarSectionComponent,
  ],
  imports: [
    CommonModule,
    BarSectionRoutingModule,
    AngularMatModule,

  ]
})
export class BarSectionModule { }
