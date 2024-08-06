import { NgModule } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";


const angularFormModule=[
  FormsModule,
  ReactiveFormsModule,
]
@NgModule({
  exports: angularFormModule,
  imports: angularFormModule
})
export class AngularFormModule { }
