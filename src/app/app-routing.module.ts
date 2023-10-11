import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    redirectTo: "auth/login"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
