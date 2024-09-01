import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsComponent} from "./jobs.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: JobsComponent,children:[
      { path: 'all', loadChildren:()=> import('./job-all/job-all.module').then(m=>m.JobAllModule) ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'SUPERVISOR' }},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
