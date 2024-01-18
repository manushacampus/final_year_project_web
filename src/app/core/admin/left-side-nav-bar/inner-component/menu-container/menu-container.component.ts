import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent {


  @Input() Menus!: any[] | undefined;

  @Input() navState= false;
  isMultiLevel(menu:any):boolean{
    if (!!menu.list){
      return menu.list.length > 0;
    }
    return false;
  }



}
