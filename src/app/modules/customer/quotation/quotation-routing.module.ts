import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuotationComponent} from "./quotation.component";

import {ProductDesignComponent} from "./inner-component/quot-product-design/product-design.component";
import {QuotProductComponent} from "./inner-component/quot-product/quot-product.component";

const routes: Routes = [
  { path: '', component:QuotationComponent,children:[
      {path: '', component: ProductDesignComponent},
      {path: 'design/:id', component: QuotProductComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
