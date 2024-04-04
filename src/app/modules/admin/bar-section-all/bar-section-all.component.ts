import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ExampleDialogComponent} from "./inner-component/example-dialog/example-dialog.component";

@Component({
  selector: 'app-bar-section-all',
  templateUrl: './bar-section-all.component.html',
  styleUrls: ['./bar-section-all.component.scss']
})
export class BarSectionAllComponent implements OnInit{
  constructor(public dialog: MatDialog) {}

  filter:FormControl = new FormControl<String>('')
  ngOnInit(): void {
    // this.filter = new FormControl<any>('')
    this.pageSize=10;
    this.totalPage=10;
    this.totalElement=100;
    this.getSections()
  }

  sectionList:any=[]
  page=0;
  pageSize:any;
  totalPage:any;
  totalElement:any;

  cardList:any=[{name:'name',sectionNo:'SF23',weight:8.9},
    {name:'name',sectionNo:'SF43',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'TF23',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'GH423',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'HH532',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'ST342',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'GH434',weight:8.9,image:'./assets/item01.png'},
    {name:'name',sectionNo:'HG32',weight:8.9,image:'./assets/item01.png'}]
  getSections(){
    fetch('./assets/api/section.json').then(res=>res.json()).then(
      json =>{
        console.log("response=",json)
        this.sectionList =json
      }
    )
  }
  onPaginationClick(page: number) {
    console.log("page number=",page);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      data: "sss"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
