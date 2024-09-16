import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BarSectionAllComponent} from "../../bar-section-all.component";

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss']
})
export class SectionViewComponent implements OnInit{
  default:string = ""
  obj!:any;
  constructor(
      public dialogRef: MatDialogRef<SectionViewComponent>,
      @Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit(): void {
    console.log("data=",this.data)
    this.obj = this.data
  }


  close(): void {
    this.dialogRef.close();
  }
}
