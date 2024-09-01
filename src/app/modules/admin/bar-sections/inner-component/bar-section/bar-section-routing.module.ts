import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarSectionComponent} from "./bar-section.component";
import {AdminAuthGuard} from "../../../../../auth/admin-auth.guard";


const routes: Routes = [
  { path: '', component: BarSectionComponent , children:[
      { path: 'cat', loadChildren: () => import('src/app/modules/admin/bar-section-cat/bar-section-cat.module').then(m => m.BarSectionCatModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ALL' } },
      { path: 'all/:param', loadChildren: () => import('src/app/modules/admin/bar-section-all/bar-section-all.module').then(m => m.BarSectionAllModule) ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ALL' }}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarSectionRoutingModule { }
