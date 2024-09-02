import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {SupplierManagementComponent} from "./supplier-management.component";
import {SupplierManagementAllComponent} from "./supplier-management-all/supplier-management-all.component";

const routes: Routes = [
  { path: '', component: SupplierManagementComponent,children:[
      {path: 'all', component: SupplierManagementAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'MANAGER' }},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierManagementRoutingModule { }
