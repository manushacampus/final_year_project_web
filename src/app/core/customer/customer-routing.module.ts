import {RouterModule, Routes} from "@angular/router";
import {CustomerComponent} from "./customer.component";
import {NgModule} from "@angular/core";

const routes:Routes =[
  {
    path: '', component: CustomerComponent, children:[
      { path: 'home', loadChildren: () => import('../../modules/customer/home/home.module').then(m => m.HomeModule) },
      { path: 'product', loadChildren: () => import('../../modules/customer/product/product.module').then(m => m.ProductModule) },
    ]
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule{

}
