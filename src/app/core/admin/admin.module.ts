import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSideNavBarComponent } from './left-side-nav-bar/left-side-nav-bar.component';
import {AngularMatModule} from "../../modules/material/angular-mat/angular-mat.module";
import { ClientComponent } from './top-bar/inner-component/client/client.component';
import { MenuContainerComponent } from './left-side-nav-bar/inner-component/menu-container/menu-container.component';



@NgModule({
    declarations: [
        AdminComponent,
        TopBarComponent,
        LeftSideNavBarComponent,
        ClientComponent,
        MenuContainerComponent
    ],
    exports: [
        TopBarComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        AngularMatModule,

    ]
})
export class AdminModule { }
