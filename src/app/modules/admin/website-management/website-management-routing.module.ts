import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilityManagementComponent} from "../utility-management/utility-management.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {WebsiteManagementAllComponent} from "./website-management-all/website-management-all.component";

const routes: Routes = [
  { path: '', component: UtilityManagementComponent,children:[
      {path: 'all', component: WebsiteManagementAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteManagementRoutingModule { }
