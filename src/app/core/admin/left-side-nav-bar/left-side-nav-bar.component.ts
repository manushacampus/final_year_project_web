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
      {"menuName":"Product Design Management","url":"product-design/all","icon":"business_center","designation":"SUPERVISOR"},
      {"menuName":"Purchase Request","url":"purchase/all","icon":"redeem","designation":"MANAGER"},
      {"menuName":"Job Management","url":"job/all","icon":"event_available","designation":"SUPERVISOR"},
      {"menuName":"Task","url":"employee-job/task-all","icon":"event_note  ","designation":"EMPLOYEE"},
      {"menuName":"Delivery","url":"delivery/all","icon":"local_shipping","designation":"MANAGER"},
      {"menuName":"Jobs","url":"employee-job/all","icon":"calendar_view_day","designation":"EMPLOYEE"},
      {"menuName":"Customer Quotation","url":"quotation/all","icon":"local_activity","designation":"SUPERVISOR"},
      {"menuName":"Customer Orders","url":"orders/all","icon":"local_mall","designation":"SUPERVISOR"},
      {"menuName":"Employee Management","url":"employee/all","icon":"person","designation":"ADMIN"},
      {"menuName":"Customer Management","url":"customer/all","icon":"people","designation":"ADMIN"},
      {"menuName":"Salary Management","url":"salary/all","icon":"payment","designation":"ADMIN"},
      {"menuName":"Supplier Management","url":"supplier/all","icon":"business","designation":"MANAGER"},
      {"menuName":"Payment Management","url":"payment/all","icon":"attach_money","designation":"MANAGER"},
      {"menuName":"Web Site Management","url":"website/all","icon":"description","designation":"ADMIN"},
      {"menuName":"Utility Management","url":"utility/all","icon":"network_wifi","designation":"ADMIN"},
      {"menuName":"Reports","url":"reports/all","icon":" insert_drive_file","designation":"ADMIN"},


    ]
  }


}
