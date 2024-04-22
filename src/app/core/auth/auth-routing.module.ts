import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent, children:[
      { path: 'admin', loadChildren: () => import('../../modules/auth/admin-auth/admin-auth.module').then(m => m.AdminAuthModule) },
      { path: 'customer', loadChildren: () => import('../../modules/auth/customer-auth/customer-auth.module').then(m => m.CustomerAuthModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
