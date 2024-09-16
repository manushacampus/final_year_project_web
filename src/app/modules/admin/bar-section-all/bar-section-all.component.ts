import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../core/services/api/admin/employee.service";
import {ToastrService} from "ngx-toastr";
import {BarSectionService} from "../../../core/services/api/admin/bar-section.service";
import {SectionViewComponent} from "./inner-component/section-view/section-view.component";

@Component({
  selector: 'app-bar-section-all',
  templateUrl: './bar-section-all.component.html',
  styleUrls: ['./bar-section-all.component.scss']
})
export class BarSectionAllComponent implements OnInit{
  constructor(public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private barSectionService:BarSectionService,
              private toastrService:ToastrService) {}

  filter:FormControl = new FormControl<String>('')
  cat: string="";
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cat = params['param'];
    });
    this.getSections()
    this.filter.valueChanges.pipe().subscribe(data=>{
      console.log("filter",data)
      if (data=="ALL"){
        this.barSize = "";
        this.selectedPageIndex =0
        this.getSections()
      }else {
        this.barSize = data;
        this.selectedPageIndex =0
        this.getSections()
      }


    })
  }

  sectionList:any=[]
  barSize=""
  totalPage=0
  pageSize=[4,10,50]
  selectedPageSize:number=4
  selectedPageIndex:number=0
  image:string='./assets/item01.png'

  cardList:any=[{name:'name',sectionNo:'SF23',weight:8.9},
    {name:'name',sectionNo:'SF43',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'TF23',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'GH423',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'HH532',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'ST342',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'GH434',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'HG32',weight:8.9,image:'./assets/item01.png'}]
  getSections(){
    this.barSectionService.getSectionAll(
      this.selectedPageIndex,
      this.selectedPageSize,
      this.cat,
      this.barSize,
      "ACTIVE")
      .pipe().subscribe(data=>{
      this.sectionList=data.data['content']
      console.log("section",this.sectionList)
      this.totalPage = data.data.totalElements
    })
    console.log("ss",this.cat)
  }
  onPageChange(event: any) {
    console.log("event",event)
    this.selectedPageIndex = event.pageIndex;
    this.selectedPageSize = event.pageSize;
    this.getSections()
  }

  openDialog(item:any): void {
    const dialogRef = this.dialog.open(SectionViewComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
