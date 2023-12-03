import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RawMaterialComponent} from "./raw-material.component";
import {BarComponent} from "./inner-component/bar/bar.component";

const routes: Routes = [
  { path: '', component: RawMaterialComponent,children:[
      { path: 'bar', component: BarComponent }
    ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawMaterialRoutingModule { }
