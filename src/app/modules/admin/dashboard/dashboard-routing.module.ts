import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";

const routes: Routes = [{ path: '', component: DashboardComponent ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ALL' }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
