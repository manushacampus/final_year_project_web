import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsComponent} from "../jobs/jobs.component";
import {EmployeeJobComponent} from "./employee-job.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: EmployeeJobComponent,children:[
      { path: 'all', loadChildren:()=> import('./employee-job-all/employee-job-all.module').then(m=>m.EmployeeJobAllModule),canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'EMPLOYEE' } },
      { path: 'task-all', loadChildren:()=> import('./employee-task-all/employee-task-all.module').then(m=>m.EmployeeTaskAllModule) ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'EMPLOYEE' }},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeJobRoutingModule { }
