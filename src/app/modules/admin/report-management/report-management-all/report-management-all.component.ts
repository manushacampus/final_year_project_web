import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SalaryAddComponent} from "../../salary-management/salary-add/salary-add.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReportService} from "../../../../core/services/api/admin/report.service";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-report-management-all',
  templateUrl: './report-management-all.component.html',
  styleUrls: ['./report-management-all.component.scss']
})
export class ReportManagementAllComponent implements OnInit{

  constructor(public dialog:MatDialog,
              private reportService:ReportService,
              private t:ToastrService) {
  }

  report!:any;

  details!:FormGroup;
  ngOnInit(): void {
    this.details = new FormGroup({
      startDate:new FormControl('',Validators.required),
      endDate:new FormControl(1,Validators.required),
    });
    this.details.valueChanges.pipe().subscribe(data=>{
    })
  }

  downloadPDF() {
    const element = document.getElementById('pdf-content'); // Select the element to print

    html2canvas(element!).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; // A4 size width in mm
      const pageHeight = 297; // A4 size height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('my-document.pdf'); // Save the generated PDF
    });
  }

  generateReport() {
    this.reportService.getReport(this.details.value).pipe().subscribe(data=>{
      console.log("dataewe",data)
      if (data.code==200){
        this.report = data.data
      }
      else {
        this.t.error("Unsucess")
      }

    })
  }
}
