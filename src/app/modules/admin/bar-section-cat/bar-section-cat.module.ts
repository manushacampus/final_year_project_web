import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarSectionCatRoutingModule } from './bar-section-cat-routing.module';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {BarSectionCatComponent} from "./bar-section-cat.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    BarSectionCatComponent
  ],
  imports: [
    CommonModule,
    BarSectionCatRoutingModule,
    AngularMatModule,
    ReactiveFormsModule,
    NgbPagination,
  ]
})
export class BarSectionCatModule { }
