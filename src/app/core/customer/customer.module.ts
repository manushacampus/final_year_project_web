import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerComponent} from "./customer.component";
import {CustomerRoutingModule} from "./customer-routing.module";
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    CustomerComponent,
    TopBarComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        MatBadgeModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    ]
})
export class CustomerModule { }
