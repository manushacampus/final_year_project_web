import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryFilterService} from "../../../core/services/utils/category-filter.service";
import {SECTION_CATEGORY} from "../../../core/types/SECTION_CATEGORY";

@Component({
  selector: 'app-bar-section-cat',
  templateUrl: './bar-section-cat.component.html',
  styleUrls: ['./bar-section-cat.component.scss']
})
export class BarSectionCatComponent implements OnInit{

  isVisibleByMode:SECTION_CATEGORY="ALL"
  category:any[]=[];
  constructor(private router: Router,private filterService:CategoryFilterService) {
  }

  ngOnInit(): void {
    this.filterService.getFilterMode().subscribe(mode=>{
      console.log("sssrrrrrrrr",mode)
      this.checkVisibility(mode)
    })
    this.getSectionsCategory()
  }

  getSectionsCategory(){
    fetch('./assets/api/section-category.json').then(res=>res.json()).then(
      json =>{
        console.log("response=",json)
        this.category =json
      }
    )
  }

  navigateSection() {
    this.router.navigate(['../all']);
    console.log("sssssssssssss")
  }

  checkVisibility(mode:SECTION_CATEGORY){
    this.isVisibleByMode = mode
  }
}
