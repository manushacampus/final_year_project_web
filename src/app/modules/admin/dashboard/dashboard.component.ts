import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(private auth:AuthService) {
  }
  designation!:any;
  ngOnInit(): void {
    this.designation = this.auth.getLoginUser().designation;
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  test() {
    console.log('test');
  }
  cellClicked(element:any) {
    console.log(element.name + ' cell clicked');
  }

}
