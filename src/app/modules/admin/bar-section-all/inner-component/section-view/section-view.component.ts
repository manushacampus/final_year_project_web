import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BarSectionAllComponent} from "../../bar-section-all.component";

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss']
})
export class SectionViewComponent {

  constructor(
    public dialogRef: MatDialogRef<SectionViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}
  close(): void {
    this.dialogRef.close();
  }

}
