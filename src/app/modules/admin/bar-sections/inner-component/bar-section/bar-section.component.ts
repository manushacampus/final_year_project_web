import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bar-section',
  templateUrl: './bar-section.component.html',
  styleUrls: ['./bar-section.component.scss']
})
export class BarSectionComponent {
  constructor(private router: Router) {
  }
  cardList:any=[{name:'name',sectionNo:'SF23',weight:8.9},
    {name:'name',sectionNo:'SF43',weight:8.9},
    {name:'name',sectionNo:'TF23',weight:8.9},
    {name:'name',sectionNo:'GH423',weight:8.9},
    {name:'name',sectionNo:'HH532',weight:8.9},
    {name:'name',sectionNo:'ST342',weight:8.9},
    {name:'name',sectionNo:'GH434',weight:8.9},
    {name:'name',sectionNo:'HG32',weight:8.9}]

  panelOpenState:boolean=false;

  addNew() {
    console.log("ddddd")
    this.router.navigate(['../form']);
  }
}
