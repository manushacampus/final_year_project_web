import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, of} from "rxjs";
import {BarSectionService} from "../../../../../../core/services/api/admin/bar-section.service";
import {InventoryService} from "../../../../../../core/services/api/admin/inventory.service";

@Component({
  selector: 'app-inventory-bar-form',
  templateUrl: './inventory-bar-form.component.html',
  styleUrls: ['./inventory-bar-form.component.scss']
})
export class InventoryBarFormComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<InventoryBarFormComponent>,
              private barSectionService:BarSectionService,
              private inventoryService:InventoryService,
              private dialog:MatDialog,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any
  ) {
  }
  options:(string | null)[] = [];
  filteredOptions!: Observable<string[]>;
  ngOnInit(): void {

    this.barInventoryForm = new FormGroup({
      id:new FormControl(''),
      sectionNo: new FormControl('',this.optionValidator.bind(this)),
      color: new FormControl('#000000',),
      length: new FormControl('',),
      qty: new FormControl('',),
      price: new FormControl('',),
    });

    this.getAllBarAngels();

    this.filteredOptions = (this.barInventoryForm.get("sectionNo")?.valueChanges|| of([])).pipe(
      map(value => this._filter(value))
    );


  }
  private _filter(value: string): string[] {
    console.log("value=",value)
    const filterValue = value.toLowerCase();
    return this.options
      .filter((option): option is string => option !== null)
      .filter(option => option.toLowerCase().includes(filterValue));
  }
  getAllBarAngels(){
this.barSectionService.getBarSectionAll().pipe().subscribe(data=>{
  console.log(data.data)
  this.options = data.data.map((item:any) => item.sectionNo);
  console.log(this.options);
});
  }
  private optionValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && !this.options.includes(control.value)) {
      return { invalidOption: true };
    }
    return null;
  }
  getErrorMessage() {
    const control = this.barInventoryForm.get('sectionNo');
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    if (control?.hasError('invalidOption')) {
      return 'Invalid section number';
    }
    return '';
  }

  barInventoryForm!:FormGroup;

  saveJobDoor() {
    console.log("save object=",this.barInventoryForm.value)
    this.inventoryService.addBar(this.barInventoryForm.value).pipe().subscribe(data=>{
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

  datePicker() {

  }

  ss() {
    console.log("sssss")

  }
}
