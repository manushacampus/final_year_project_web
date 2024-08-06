import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarSectionComponent} from "./bar-section.component";
import {BarSectionRoutingModule} from "./bar-section-routing.module";
import {AngularMatModule} from "../../../../material/angular-mat/angular-mat.module";
import {MatInputModule} from "@angular/material/input";
import {AngularFormModule} from "../../../../material/angular-form/angular-form.module";



@NgModule({
  declarations: [
    BarSectionComponent,
  ],
  imports: [
    CommonModule,
    BarSectionRoutingModule,
    AngularMatModule,
    AngularFormModule

  ]
})
export class BarSectionModule { }
