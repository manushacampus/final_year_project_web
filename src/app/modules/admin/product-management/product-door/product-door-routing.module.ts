import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDoorComponent} from "./product-door.component";
import {ProductDoorListComponent} from "./inner-component/product-door-list/product-door-list.component";
import {ProductDoorFormComponent} from "./inner-component/product-door-form/product-door-form.component";
import {ProductDoorViewComponent} from "./inner-component/product-door-view/product-door-view.component";

const routes: Routes = [
  { path: '', component: ProductDoorComponent,children:[
      { path: 'all', component: ProductDoorListComponent,data: { expectedSubRole: 'SUPERVISOR' } },
      { path: 'form', component: ProductDoorFormComponent ,data: { expectedSubRole: 'SUPERVISOR' }},
      { path: 'view/:id', component: ProductDoorViewComponent ,data: { expectedSubRole: 'SUPERVISOR' }},
    ]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDoorRoutingModule { }
