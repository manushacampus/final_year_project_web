import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {QuotationManagementComponent} from "./quotation-management.component";
import {QuotationManagementAllComponent} from "./quotation-management-all/quotation-management-all.component";

const routes: Routes = [
  { path: '', component: QuotationManagementComponent,children:[
      {path: 'all', component: QuotationManagementAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationManagementRoutingModule { }