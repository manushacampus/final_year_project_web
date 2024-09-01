import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarSectionsComponent} from "./bar-sections.component";
import {BarSectionsFormComponent} from "./inner-component/bar-sections-form/bar-sections-form.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: BarSectionsComponent },
  { path: 'all', loadChildren:()=> import('../bar-sections/inner-component/bar-section/bar-section.module').then(m=>m.BarSectionModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ALL' } },
  { path: 'form', component: BarSectionsFormComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'SUPERVISOR' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarSectionsRoutingModule { }
