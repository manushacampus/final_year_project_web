import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";

const routes:Routes =[
  {
  path: '', component: AdminComponent, children:[
      { path: 'dashboard', loadChildren: () => import('../../modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'doors', loadChildren: () => import('../../modules/admin/door/door.module').then(m => m.DoorModule) },
      { path: 'windows', loadChildren: () => import('../../modules/admin/windows/windows.module').then(m => m.WindowsModule) },
      { path: 'raw-material', loadChildren: () => import('../../modules/admin/raw-material/raw-material.module').then(m => m.RawMaterialModule) },
      { path: 'bar', loadChildren: () => import('../../modules/admin/bar/bar.module').then(m => m.BarModule) },
      { path: 'bar-section', loadChildren: () => import('../../modules/admin/bar-sections/bar-sections.module').then(m => m.BarSectionsModule) },
      { path: 'inventory', loadChildren: () => import('../../modules/admin/inventory/inventory.module').then(m => m.InventoryModule) },
    ]
}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{

}
