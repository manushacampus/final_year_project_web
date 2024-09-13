import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {UtilityManagementComponent} from "./utility-management.component";
import {UtilityManagementAllComponent} from "./utility-management-all/utility-management-all.component";

const routes: Routes = [
  { path: '', component: UtilityManagementComponent,children:[
      {path: 'all', component: UtilityManagementAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityManagementRoutingModule { }
