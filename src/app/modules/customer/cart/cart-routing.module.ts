import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartAllComponent} from "./inner-component/cart-all/cart-all.component";

const routes: Routes = [
  { path: '', component:CartAllComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
