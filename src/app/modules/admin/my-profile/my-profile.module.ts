import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileFormComponent } from './my-profile-form/my-profile-form.component';
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";


@NgModule({
  declarations: [
    MyProfileComponent,
    MyProfileFormComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    AngularFormModule,
    AngularMatModule
  ]
})
export class MyProfileModule { }
