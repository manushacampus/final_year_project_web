import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarSectionCatComponent} from "./bar-section-cat.component";

const routes: Routes = [
  { path: '', component: BarSectionCatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarSectionCatRoutingModule { }
