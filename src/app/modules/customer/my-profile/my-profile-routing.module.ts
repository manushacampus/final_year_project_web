import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyProfileComponent} from "./my-profile.component";
import {ProfileComponent} from "./inner-component/profile/profile.component";
import {MyOrdersComponent} from "./inner-component/my-orders/my-orders.component";
import {MyQuotationComponent} from "./inner-component/my-quotation/my-quotation.component";

const routes: Routes = [
  { path: '', component:MyProfileComponent,children:[
      {path: '', component: ProfileComponent},
      {path: 'orders', component: MyOrdersComponent},
      {path: 'quotation', component: MyQuotationComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
