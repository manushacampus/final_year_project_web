import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBadgeModule} from "@angular/material/badge";


const angularMatModules=[
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatBadgeModule
]
@NgModule({
  exports: angularMatModules,
  imports: angularMatModules
})
export class AngularMatModule { }
