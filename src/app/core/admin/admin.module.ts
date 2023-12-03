import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSideNavBarComponent } from './left-side-nav-bar/left-side-nav-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AngularMatModule} from "../../modules/material/angular-mat/angular-mat.module";
import { ClientComponent } from './top-bar/inner-component/client/client.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import { MenuContainerComponent } from './left-side-nav-bar/inner-component/menu-container/menu-container.component';
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
    AdminComponent,
    TopBarComponent,
    LeftSideNavBarComponent,
    ClientComponent,
    MenuContainerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMatModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule

  ]
})
export class AdminModule { }
