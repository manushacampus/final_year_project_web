import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobAllComponent} from "./job-all.component";

const routes: Routes = [
  { path: '', component: JobAllComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobAllRoutingModule { }
