import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CategoryFilterService} from "../../../../../core/services/utils/category-filter.service";

@Component({
  selector: 'app-bar-section',
  templateUrl: './bar-section.component.html',
  styleUrls: ['./bar-section.component.scss']
})
export class BarSectionComponent {
  constructor(private router: Router,private filterSection:CategoryFilterService) {
  }


  panelOpenState:boolean=false;

  addNew() {
    console.log("ddddd")
    this.router.navigate(['../form']);
  }

  setMode(mode:any) {
    this.filterSection.setFilterMode(mode)
  }
}
