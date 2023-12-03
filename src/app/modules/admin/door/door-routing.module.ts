import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoorComponent} from "./door.component";

const routes: Routes = [{ path: '', component: DoorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoorRoutingModule { }
