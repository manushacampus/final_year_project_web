import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { ProductListComponent } from './inner-component/product-list/product-list.component';
import { ProductViewComponent } from './inner-component/product-view/product-view.component';
import {NgImageSliderModule} from "ng-image-slider";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        MatPaginatorModule,
        MatDialogModule,
        NgImageSliderModule,
        AngularFormModule,
        MatTableModule

    ]
})
export class ProductModule { }
