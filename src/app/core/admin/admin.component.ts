import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{

  navSate = false;

  loading = false;

  receiveNavState($event: boolean): void{
    console.log("lhsafd");

    this.loading = true
    this.navSate = $event;
  }
}
