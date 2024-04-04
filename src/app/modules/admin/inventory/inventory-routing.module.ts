import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryComponent} from "./inventory.component";

const routes: Routes = [
  { path: '', component: InventoryComponent,children:[
    { path: 'all', loadChildren:()=> import('./inventory-all/inventory-all.module').then(m=>m.InventoryAllModule) },
      { path: 'bar', loadChildren:()=> import('./inventory-bar/inventory-bar.module').then(m=>m.InventoryBarModule) }
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
