import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {AdminAuthGuard} from "../../auth/admin-auth.guard";

const routes:Routes =[
  {
  path: '', component: AdminComponent, children:[
      { path: 'dashboard', loadChildren: () => import('../../modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } },
      { path: 'product-doors', loadChildren: () => import('../../modules/admin/product-management/product-door/product-door.module').then(m => m.ProductDoorModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } },
      { path: 'product-window', loadChildren: () => import('../../modules/admin/product-management/product-window/product-window.module').then(m => m.ProductWindowModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }  },
      { path: 'bar-section', loadChildren: () => import('../../modules/admin/bar-sections/bar-sections.module').then(m => m.BarSectionsModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }  },
      { path: 'inventory', loadChildren: () => import('../../modules/admin/inventory/inventory.module').then(m => m.InventoryModule) ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } },
      { path: 'job', loadChildren: () => import('../../modules/admin/jobs/jobs.module').then(m => m.JobsModule) ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } },
      { path: 'employee', loadChildren: () => import('../../modules/admin/employee-management/employee-management.module').then(m => m.EmployeeManagementModule) ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' } },
      { path: 'employee-job', loadChildren: () => import('../../modules/admin/employee-job/employee-job.module').then(m => m.EmployeeJobModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }  },
      { path: 'product-design', loadChildren: () => import('../../modules/admin/product-design/product-design.module').then(m => m.ProductDesignModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }  },
      { path: 'quotation', loadChildren: () => import('../../modules/admin/quotation-management/quotation-management.module').then(m => m.QuotationManagementModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }  },
    ]
}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{

}
