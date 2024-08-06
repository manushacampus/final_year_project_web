import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarSectionsComponent } from './bar-sections.component';
import {BarSectionsRoutingModule} from "./bar-sections-routing.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {BarSectionsFormComponent} from "./inner-component/bar-sections-form/bar-sections-form.component";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";



@NgModule({
  declarations: [
    BarSectionsComponent,
    BarSectionsFormComponent,

  ],
  imports: [
    CommonModule,
    BarSectionsRoutingModule,
    AngularMatModule,
    AngularFormModule
  ]
})
export class BarSectionsModule { }
