import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-side-nav-bar',
  templateUrl: './left-side-nav-bar.component.html',
  styleUrls: ['./left-side-nav-bar.component.scss']
})
export class LeftSideNavBarComponent implements OnInit{

@Input() navState = false;

  currentMenus:any[]=[];

  ngOnInit(): void {
    this.currentMenus=[
      {"menuName":"Dashboard","url":"dashboard","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Dashboard","url":"dashboard","icon":"work_outline","designation":"MANAGER"},
      {"menuName":"Dashboard","url":"dashboard","icon":"work_outline","designation":"SUPERVISOR"},
      {"menuName":"Dashboard","url":"dashboard","icon":"work_outline","designation":"EMPLOYEE"},
      {"menuName":"Product Management","url":"dashboard","icon":"swap_calls","designation":"SUPERVISOR","list":[
          {"menuName":"Door","url":"product-doors/all","icon":"folder_open","designation":"SUPERVISOR"},
          {"menuName":"Windows","url":"product-window/all","icon":"folder_open","designation":"SUPERVISOR"},
          {"menuName":"Pantry Cupboard","url":"#","icon":"folder_open","designation":"SUPERVISOR"}
        ]},
      {"menuName":"Sections","url":"bar-section/all/cat","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Sections","url":"bar-section/all/cat","icon":"work_outline","designation":"MANAGER"},
      {"menuName":"Sections","url":"bar-section/all/cat","icon":"work_outline","designation":"EMPLOYEE"},
      {"menuName":"Sections","url":"bar-section/all/cat","icon":"work_outline","designation":"SUPERVISOR"},
      {"menuName":"Inventory","url":"inventory","icon":"folder_open","designation":"MANAGER","list":[
          {"menuName":"All","url":"inventory/all","icon":"work_outline","designation":"MANAGER"},
          {"menuName":"Bar","url":"inventory/bar","icon":"work_outline","designation":"MANAGER"},
          {"menuName":"Board","url":"inventory/board","icon":"work_outline","designation":"MANAGER"},
          {"menuName":"Other","url":"inventory/other","icon":"work_outline","designation":"MANAGER"}
        ]},
      {"menuName":"Product Design Management","url":"product-design/all","icon":"work_outline","designation":"SUPERVISOR"},
      {"menuName":"Purchase Request","url":"purchase/all","icon":"work_outline","designation":"MANAGER"},
      {"menuName":"Job Management","url":"job/all","icon":"work_outline","designation":"SUPERVISOR"},
      {"menuName":"Task","url":"employee-job/task-all","icon":"work_outline","designation":"EMPLOYEE"},
      {"menuName":"Delivery","url":"delivery/all","icon":"work_outline","designation":"MANAGER"},
      {"menuName":"Jobs","url":"employee-job/all","icon":"work_outline","designation":"EMPLOYEE"},
      {"menuName":"Customer Quotation","url":"quotation/all","icon":"work_outline","designation":"SUPERVISOR"},
      {"menuName":"Employee Management","url":"employee/all","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Customer Management","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Supplier Management","url":"supplier/all","icon":"work_outline","designation":"MANAGER"},
      {"menuName":"Web Site Management","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Utility Management","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Reports","url":"#","icon":"work_outline","designation":"ADMIN"},

    ]
  }


}
