import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeTaskAllComponent} from "./employee-task-all.component";
import {AdminAuthGuard} from "../../../../auth/admin-auth.guard";

const routes: Routes = [{ path: '', component: EmployeeTaskAllComponent ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeTaskAllRoutingModule { }
