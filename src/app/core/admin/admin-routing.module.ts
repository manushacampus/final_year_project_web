import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";

const routes:Routes =[
  {
  path: '', component: AdminComponent, children:[
      { path: 'dashboard', loadChildren: () => import('../../modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'product-doors', loadChildren: () => import('../../modules/admin/product-management/product-door/product-door.module').then(m => m.ProductDoorModule) },
      { path: 'product-window', loadChildren: () => import('../../modules/admin/product-management/product-window/product-window.module').then(m => m.ProductWindowModule) },
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
