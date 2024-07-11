import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryBarComponent} from "./inventory-bar.component";
import {AdminAuthGuard} from "../../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: InventoryBarComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryBarRoutingModule { }
