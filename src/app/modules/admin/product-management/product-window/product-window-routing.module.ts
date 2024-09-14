import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDoorComponent} from "../product-door/product-door.component";
import {ProductWindowListComponent} from "./inner-component/product-window-list/product-window-list.component";

const routes: Routes = [
  { path: '', component: ProductDoorComponent,children:[
      { path: 'all', component: ProductWindowListComponent, data: { expectedSubRole: 'SUPERVISOR' } },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductWindowRoutingModule { }
