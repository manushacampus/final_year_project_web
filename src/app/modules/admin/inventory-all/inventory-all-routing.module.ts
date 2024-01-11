import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryAllComponent} from "./inventory-all.component";

const routes: Routes = [
  { path: '', component: InventoryAllComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryAllRoutingModule { }
