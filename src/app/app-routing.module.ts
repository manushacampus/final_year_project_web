import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./core/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "customer"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
