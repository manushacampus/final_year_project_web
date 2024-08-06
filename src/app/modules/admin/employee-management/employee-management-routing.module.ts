import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeManagementComponent} from "./employee-management.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeRegComponent} from "./employee-reg/employee-reg.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: EmployeeManagementComponent,children:[
      {path: 'all', component: EmployeeListComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
      {path: 'form', component: EmployeeRegComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }
