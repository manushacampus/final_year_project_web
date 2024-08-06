import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationComponent } from './quotation.component';
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import { ProductDesignComponent } from './inner-component/quot-product-design/product-design.component';
import { QuotProductComponent } from './inner-component/quot-product/quot-product.component';


@NgModule({
  declarations: [
    QuotationComponent,
    ProductDesignComponent,
    QuotProductComponent
  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
    AngularFormModule,
    AngularMatModule
  ]
})
export class QuotationModule { }
