import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDesignRoutingModule } from './product-design-routing.module';
import { ProductDesignComponent } from './product-design.component';
import { ProductDesignAllComponent } from './product-design-all/product-design-all.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { ProductDesignFormComponent } from './product-design-form/product-design-form.component';
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import { ProductDesignViewComponent } from './product-design-view/product-design-view.component';


@NgModule({
  declarations: [
    ProductDesignComponent,
    ProductDesignAllComponent,
    ProductDesignFormComponent,
    ProductDesignViewComponent
  ],
    imports: [
        CommonModule,
        ProductDesignRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        AngularFormModule,
        MatTabsModule,
        ReactiveFormsModule
    ]
})
export class ProductDesignModule { }
