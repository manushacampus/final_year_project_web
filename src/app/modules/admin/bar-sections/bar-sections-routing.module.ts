import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarSectionsComponent} from "./bar-sections.component";
import {BarSectionComponent} from "./inner-component/bar-section/bar-section.component";
import {BarSectionsFormComponent} from "./inner-component/bar-sections-form/bar-sections-form.component";

const routes: Routes = [
  { path: '', component: BarSectionsComponent },
  { path: 'all', component: BarSectionComponent },
  { path: 'form', component: BarSectionsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarSectionsRoutingModule { }
