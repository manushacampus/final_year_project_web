import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {CustomerComponent} from "../customer/customer.component";

const routes:Routes =[
  {
  path: '', component: AdminComponent, children:[]
}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{

}
