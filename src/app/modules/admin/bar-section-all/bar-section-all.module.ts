import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarSectionAllRoutingModule } from './bar-section-all-routing.module';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {BarSectionAllComponent} from "./bar-section-all.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    BarSectionAllComponent
  ],
  imports: [
    CommonModule,
    BarSectionAllRoutingModule,
    AngularMatModule,
    ReactiveFormsModule,
    NgbPagination,
  ]
})
export class BarSectionAllModule { }
