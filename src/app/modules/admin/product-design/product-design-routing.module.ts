import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDesignComponent} from "./product-design.component";
import {ProductDesignAllComponent} from "./product-design-all/product-design-all.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {ProductDesignViewComponent} from "./product-design-view/product-design-view.component";

const routes: Routes = [
  { path: '', component: ProductDesignComponent,children:[
      {path: 'all', component: ProductDesignAllComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
      {path: 'view/:id', component: ProductDesignViewComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDesignRoutingModule { }
