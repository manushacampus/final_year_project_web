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
      {"menuName":"Dashboard","url":"dashboard","icon":"work_outline","designation":"EMPLOYEE"},
      {"menuName":"Product Management","url":"dashboard","icon":"swap_calls","designation":"EMPLOYEE","list":[
          {"menuName":"Door","url":"product-doors/all","icon":"folder_open","designation":"EMPLOYEE"},
          {"menuName":"Windows","url":"product-window/all","icon":"folder_open","designation":"EMPLOYEE"},
          {"menuName":"Pantry Cupboard","url":"#","icon":"folder_open","designation":"EMPLOYEE"}
        ]},
      {"menuName":"Sections","url":"bar-section/all/cat","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Inventory","url":"inventory","icon":"folder_open","designation":"ADMIN","list":[
          {"menuName":"All","url":"inventory/all","icon":"work_outline","designation":"ADMIN"},
          {"menuName":"Bar","url":"inventory/bar","icon":"work_outline","designation":"ADMIN"},
          {"menuName":"Board","url":"inventory/board","icon":"work_outline","designation":"ADMIN"},
          {"menuName":"Other","url":"inventory/other","icon":"work_outline","designation":"ADMIN"}
        ]},
      {"menuName":"Product Design Management","url":"product-design/all","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Purchase Request","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Job Management","url":"job/all","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Task","url":"employee-job/task-all","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Delivery","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Jobs","url":"employee-job/all","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Employee Management","url":"employee/all","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Customer Management","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Supplier Management","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Web Site Management","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Utility Management","url":"#","icon":"work_outline","designation":"ADMIN"},
      {"menuName":"Reports","url":"#","icon":"work_outline","designation":"ADMIN"},

    ]
  }


}
