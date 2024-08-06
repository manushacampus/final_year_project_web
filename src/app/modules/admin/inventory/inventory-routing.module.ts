import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryComponent} from "./inventory.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: InventoryComponent,children:[
    { path: 'all', loadChildren:()=> import('./inventory-all/inventory-all.module').then(m=>m.InventoryAllModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } },
      { path: 'bar', loadChildren:()=> import('./inventory-bar/inventory-bar.module').then(m=>m.InventoryBarModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } }
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
