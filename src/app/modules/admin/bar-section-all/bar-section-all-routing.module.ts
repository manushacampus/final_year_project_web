import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarSectionAllComponent} from "./bar-section-all.component";

const routes: Routes = [
  { path: '', component:BarSectionAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarSectionAllRoutingModule { }
