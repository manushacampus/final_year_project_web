import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteManagementRoutingModule } from './website-management-routing.module';
import { WebsiteManagementAllComponent } from './website-management-all/website-management-all.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { WebsiteManagementFormComponent } from './website-management-form/website-management-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    WebsiteManagementAllComponent,
    WebsiteManagementFormComponent
  ],
  imports: [
    CommonModule,
    WebsiteManagementRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WebsiteManagementModule { }
