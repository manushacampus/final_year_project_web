import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDesignComponent} from "./product-design.component";
import {ProductDesignAllComponent} from "./product-design-all/product-design-all.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: ProductDesignComponent,children:[
      {path: 'all', component: ProductDesignAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDesignRoutingModule { }
