import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarSectionAllRoutingModule } from './bar-section-all-routing.module';
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {BarSectionAllComponent} from "./bar-section-all.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {MatDialogModule} from "@angular/material/dialog";
import { SectionViewComponent } from './inner-component/section-view/section-view.component';


@NgModule({
  declarations: [
    BarSectionAllComponent,
    SectionViewComponent
  ],
  imports: [
    CommonModule,
    BarSectionAllRoutingModule,
    AngularMatModule,
    ReactiveFormsModule,
    NgbPagination,
    MatDialogModule,
    FormsModule
  ]
})
export class BarSectionAllModule { }
