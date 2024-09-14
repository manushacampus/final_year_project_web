import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {DeliveryManagementComponent} from "./delivery-management.component";
import {DeliveryManagementAllComponent} from "./delivery-management-all/delivery-management-all.component";
import {ProductOrdersViewComponent} from "./product-orders-view/product-orders-view.component";
import {QuotationOrdersViewComponent} from "./quotation-orders-view/quotation-orders-view.component";

const routes: Routes = [
  { path: '', component: DeliveryManagementComponent,children:[
      {path: 'all', component: DeliveryManagementAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'MANAGER' }},
      {path: 'product/view/:id', component: ProductOrdersViewComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'MANAGER' }},
      {path: 'quotation/view/:id', component: QuotationOrdersViewComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'MANAGER' }}

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagementRoutingModule { }
