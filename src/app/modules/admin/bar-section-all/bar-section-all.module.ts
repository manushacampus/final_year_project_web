import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarSectionAllRoutingModule } from './bar-section-all-routing.module';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {BarSectionAllComponent} from "./bar-section-all.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import { ExampleDialogComponent } from './inner-component/example-dialog/example-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    BarSectionAllComponent,
    ExampleDialogComponent
  ],
  imports: [
    CommonModule,
    BarSectionAllRoutingModule,
    AngularMatModule,
    ReactiveFormsModule,
    NgbPagination,
    MatDialogModule
  ]
})
export class BarSectionAllModule { }
