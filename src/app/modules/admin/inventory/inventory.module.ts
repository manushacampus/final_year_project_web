import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import {InventoryComponent} from "./inventory.component";
import {AngularMatModule} from "../../material/angular-mat/angular-mat.module";
import {AngularFormModule} from "../../material/angular-form/angular-form.module";
import { InventoryBoardComponent } from './inventory-board/inventory-board.component';
import { InventoryBoardFormComponent } from './inventory-board/inner-component/inventory-board-form/inventory-board-form.component';
import { InventoryOtherComponent } from './inventory-other/inventory-other.component';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryBoardComponent,
    InventoryBoardFormComponent,
    InventoryOtherComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    AngularMatModule,
    AngularFormModule
  ]
})
export class InventoryModule { }
