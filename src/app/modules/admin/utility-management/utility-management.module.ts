import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityManagementRoutingModule } from './utility-management-routing.module';
import { UtilityManagementAllComponent } from './utility-management-all/utility-management-all.component';
import { UtilityManagementFormComponent } from './utility-management-form/utility-management-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    UtilityManagementAllComponent,
    UtilityManagementFormComponent
  ],
  imports: [
    CommonModule,
    UtilityManagementRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    AngularMatModule,
    ReactiveFormsModule
  ]
})
export class UtilityManagementModule { }
