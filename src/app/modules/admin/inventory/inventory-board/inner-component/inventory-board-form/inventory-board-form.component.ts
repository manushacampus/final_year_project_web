import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BarSectionService} from "../../../../../../core/services/api/admin/bar-section.service";
import {InventoryService} from "../../../../../../core/services/api/admin/inventory.service";
import {ToastrService} from "ngx-toastr";
import {map, Observable, of} from "rxjs";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-inventory-board-form',
  templateUrl: './inventory-board-form.component.html',
  styleUrls: ['./inventory-board-form.component.scss']
})
export class InventoryBoardFormComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<InventoryBoardFormComponent>,
              private barSectionService:BarSectionService,
              private inventoryService:InventoryService,
              private dialog:MatDialog,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any
  ) {
  }
  boardInventoryForm!:FormGroup;
  options:(string | null)[] = [];
  ngOnInit(): void {

    this.boardInventoryForm = new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      code:new FormControl(''),
      color: new FormControl('#000000',),
      weight: new FormControl('',),
      height: new FormControl('',),
      qty: new FormControl('',),
      price: new FormControl('',),
    });

    this.getAllBarAngels();

  }
  getAllBarAngels(){
    this.barSectionService.getBarSectionAll().pipe().subscribe(data=>{
      console.log(data.data)
      this.options = data.data.map((item:any) => item.sectionNo);
      console.log(this.options);
    });
  }


  saveJobBoard() {
    console.log("save object=",this.boardInventoryForm.value)
    this.inventoryService.addBoard(this.boardInventoryForm.value).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.toastrService.success("saved!!")
      }
      else {
        this.toastrService.error("Error")
      }
    },error => {
      this.toastrService.error("Error",error)
    })
  }

}
