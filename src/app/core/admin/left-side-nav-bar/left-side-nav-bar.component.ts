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
      {"menuName":"Dashboard","url":"dashboard","icon":"work_outline"},
      {"menuName":"Product Management","url":"dashboard","icon":"swap_calls","list":[
          {"menuName":"Door","url":"product-doors/all","icon":"folder_open"},
          {"menuName":"Windows","url":"product-window/all","icon":"folder_open"},
          {"menuName":"Pantry Cupboard","url":"dashboard","icon":"folder_open"}
        ]},
      {"menuName":"Sections","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Inventory","url":"inventory","icon":"folder_open","list":[
          {"menuName":"All","url":"inventory/all","icon":"work_outline"},
          {"menuName":"Bar","url":"inventory/bar","icon":"work_outline"},
          {"menuName":"Board","url":"inventory/board","icon":"work_outline"},
          {"menuName":"Other","url":"inventory/other","icon":"work_outline"}
        ]},
      {"menuName":"Product Design Management","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Purchase Request","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Job","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Delivery","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Employee Management","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Customer Management","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Web Site Management","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Utility Management","url":"bar-section/all/cat","icon":"work_outline"},
      {"menuName":"Reports","url":"bar-section/all/cat","icon":"work_outline"},

    ]
  }


}
