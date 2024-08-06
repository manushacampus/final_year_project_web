import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMatModule,
    AngularFormModule,

  ]
})
export class DashboardModule { }
