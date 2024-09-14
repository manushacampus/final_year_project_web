import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {CustomerPaymentsComponent} from "./customer-payments.component";
import {CustomerPaymentsAllComponent} from "./customer-payments-all/customer-payments-all.component";

const routes: Routes = [
  { path: '', component: CustomerPaymentsComponent,children:[
      {path: 'all', component: CustomerPaymentsAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'MANAGER' }},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPaymentsRoutingModule { }
