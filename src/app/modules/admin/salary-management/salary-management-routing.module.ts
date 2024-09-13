import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {SalaryManagementComponent} from "./salary-management.component";
import {SalaryManagementAllComponent} from "./salary-management-all/salary-management-all.component";
import {SalaryAddComponent} from "./salary-add/salary-add.component";

const routes: Routes = [
  { path: '', component: SalaryManagementComponent,children:[
      {path: 'all', component: SalaryManagementAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
      {path: 'form', component: SalaryAddComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryManagementRoutingModule { }
