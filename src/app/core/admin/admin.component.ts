import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  navSate = false;

  loading = false;

  ngOnInit(): void {
  }
  receiveNavState($event: boolean): void{
    console.log("lhsafd");

    this.loading = true
    this.navSate = $event;
  }
}
