import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";


const angularMatModules=[
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  exports: angularMatModules,
  imports: angularMatModules
})
export class AngularMatModule { }
