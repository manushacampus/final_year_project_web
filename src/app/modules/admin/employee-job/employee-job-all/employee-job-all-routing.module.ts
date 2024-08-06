import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeJobAllComponent} from "./employee-job-all.component";

const routes: Routes = [{ path: '', component: EmployeeJobAllComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeJobAllRoutingModule { }
