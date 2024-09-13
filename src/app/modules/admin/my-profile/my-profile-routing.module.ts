import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyProfileComponent} from "./my-profile.component";
import {AdminAuthGuard} from "../../../auth/admin-auth.guard";
import {MyProfileFormComponent} from "./my-profile-form/my-profile-form.component";

const routes: Routes = [
  {
    path: '', component: MyProfileComponent, children: [
      {path: 'all', component: MyProfileFormComponent,canActivateChild: [AdminAuthGuard],data: { expectedSubRole: 'ALL' }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
