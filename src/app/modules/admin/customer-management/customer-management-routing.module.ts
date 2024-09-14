import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilityManagementComponent} from "../utility-management/utility-management.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {CustomerManagmentAllComponent} from "./customer-management-all/customer-managment-all.component";
import {CustomerViewComponent} from "./customer-view/customer-view.component";

const routes: Routes = [
  { path: '', component: UtilityManagementComponent,children:[
      {path: 'all', component: CustomerManagmentAllComponent, canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
      {path: 'view/:id', component: CustomerViewComponent, canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
