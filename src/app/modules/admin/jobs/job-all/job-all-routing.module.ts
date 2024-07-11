import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobAllComponent} from "./job-all.component";
import {AdminAuthGuard} from "../../../../auth/admin-auth.guard";

const routes: Routes = [
  { path: '', component: JobAllComponent ,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ADMIN' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobAllRoutingModule { }
