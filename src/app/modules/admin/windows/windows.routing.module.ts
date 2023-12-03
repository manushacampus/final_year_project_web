import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WindowsComponent} from "./windows.component";

const routes: Routes = [{ path: '', component: WindowsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowsRoutingModule { }
