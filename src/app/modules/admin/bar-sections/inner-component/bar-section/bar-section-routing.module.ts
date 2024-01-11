import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarSectionComponent} from "./bar-section.component";


const routes: Routes = [
  { path: '', component: BarSectionComponent , children:[
      { path: 'cat', loadChildren: () => import('src/app/modules/admin/bar-section-cat/bar-section-cat.module').then(m => m.BarSectionCatModule) },
      { path: 'all', loadChildren: () => import('src/app/modules/admin/bar-section-all/bar-section-all.module').then(m => m.BarSectionAllModule) }
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarSectionRoutingModule { }
