import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDoorComponent} from "./product-door.component";
import {ProductDoorListComponent} from "./inner-component/product-door-list/product-door-list.component";

const routes: Routes = [
  { path: '', component: ProductDoorComponent,children:[
      { path: 'all', component: ProductDoorListComponent },
    ]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDoorRoutingModule { }
