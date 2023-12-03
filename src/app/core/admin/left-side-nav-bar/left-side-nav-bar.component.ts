import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-side-nav-bar',
  templateUrl: './left-side-nav-bar.component.html',
  styleUrls: ['./left-side-nav-bar.component.scss']
})
export class LeftSideNavBarComponent implements OnInit{

@Input() navState = false;

  currentMenus:any[]=[];

  constructor() {
  }

  ngOnInit(): void {
    this.currentMenus=[
      {"menuName":"Dashboard","url":"dashboard"},
      {"menuName":"Product Manage","url":"dashboard","list":[
          {"menuName":"Door","url":"doors"},
          {"menuName":"Windows","url":"windows"},
          {"menuName":"Pantry Cupboard","url":"dashboard"}
        ]},
      {"menuName":"Material","url":"raw-material","list":[
          {"menuName":"Sections","url":"bar-section/all"},
          {"menuName":"Bar","url":"bar"},
          {"menuName":"Board","url":"board"},
          {"menuName":"Other","url":"other"}
        ]},

    ]
  }


}
