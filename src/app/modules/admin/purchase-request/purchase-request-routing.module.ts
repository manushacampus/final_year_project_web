import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {PurchaseRequestComponent} from "./purchase-request.component";
import {PurchaseRequestAllComponent} from "./purchase-request-all/purchase-request-all.component";
import {GrnListComponent} from "./grn-list/grn-list.component";

const routes: Routes = [
  { path: '', component: PurchaseRequestComponent,children:[
      {path: 'all', component: PurchaseRequestAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'MANAGER' }},
      {path: 'view/:id', component: GrnListComponent, canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'MANAGER' }},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRequestRoutingModule { }
