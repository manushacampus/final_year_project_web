import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsComponent} from "./jobs.component";

const routes: Routes = [
  { path: '', component: JobsComponent,children:[
      { path: 'all', loadChildren:()=> import('./job-all/job-all.module').then(m=>m.JobAllModule) },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
