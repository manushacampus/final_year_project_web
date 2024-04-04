import {Component, Inject} from '@angular/core';
import {BarSectionAllComponent} from "../../bar-section-all.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BarSectionAllComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
