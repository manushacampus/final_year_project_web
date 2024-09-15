import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-utility-bill-view',
  templateUrl: './utility-bill-view.component.html',
  styleUrls: ['./utility-bill-view.component.scss']
})
export class UtilityBillViewComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<UtilityBillViewComponent>,
              private to:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  ngOnInit(): void {

  }
}
