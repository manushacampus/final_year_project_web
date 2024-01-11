import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarSectionsComponent } from './bar-sections.component';
import {BarSectionsRoutingModule} from "./bar-sections-routing.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {BarSectionsFormComponent} from "./inner-component/bar-sections-form/bar-sections-form.component";
import { BarSectionComponent } from './inner-component/bar-section/bar-section.component';



@NgModule({
  declarations: [
    BarSectionsComponent,
    BarSectionsFormComponent,

  ],
  imports: [
    CommonModule,
    BarSectionsRoutingModule,
    AngularMatModule
  ]
})
export class BarSectionsModule { }
