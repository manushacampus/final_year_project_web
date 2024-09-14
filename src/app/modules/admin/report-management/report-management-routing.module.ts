import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilityManagementComponent} from "../utility-management/utility-management.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {ReportManagementAllComponent} from "./report-management-all/report-management-all.component";

const routes: Routes = [
  { path: '', component: UtilityManagementComponent,children:[
      {path: 'all', component: ReportManagementAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportManagementRoutingModule { }
