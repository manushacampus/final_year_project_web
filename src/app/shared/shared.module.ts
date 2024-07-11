import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDateInputComponent } from './component/form-date-input/form-date-input.component';
import {AngularMatModule} from "../modules/material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../modules/material/angular-form/angular-form.module";



@NgModule({
  declarations: [
    FormDateInputComponent
  ],
  imports: [
    CommonModule,
    AngularMatModule,
    AngularFormModule,
  ]
})
export class SharedModule { }
