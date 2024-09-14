import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDoorRoutingModule } from './product-door-routing.module';
import {ProductDoorComponent} from "./product-door.component";
import { ProductDoorListComponent } from './inner-component/product-door-list/product-door-list.component';
import {AngularMatModule} from "../../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../../material/angular-form/angular-form.module";
import {MatDialogModule} from "@angular/material/dialog";
import { ProductDoorViewComponent } from './inner-component/product-door-view/product-door-view.component';


@NgModule({
  declarations: [
    ProductDoorComponent,
    ProductDoorListComponent,
    ProductDoorViewComponent,
  ],
    imports: [
        CommonModule,
        ProductDoorRoutingModule,
        AngularMatModule,
        AngularFormModule,
    ]
})
export class ProductDoorModule { }
