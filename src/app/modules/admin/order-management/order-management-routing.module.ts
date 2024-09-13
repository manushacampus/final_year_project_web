import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {OrderManagementComponent} from "./order-management.component";
import {CustomerOrderAllComponent} from "./customer-order-all/customer-order-all.component";
import {CustomerOrderViewComponent} from "./customer-order-view/customer-order-view.component";

const routes: Routes = [
  { path: '', component: OrderManagementComponent,children:[
      {path: 'all', component: CustomerOrderAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'SUPERVISOR' }},
      {path: 'view/:id', component: CustomerOrderViewComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'SUPERVISOR' }}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
