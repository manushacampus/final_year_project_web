// import {Component, forwardRef} from '@angular/core';
// import {DateAdapter, MatDateFormats} from "@angular/material/core";
// import {DATE_FORMAT} from "../../../core/types/DATE_FORMAT";
// import {CommonModule} from "@angular/common";
// import {AngularMatModule} from "../../../modules/material/angular-mat/angular-mat.module";
// import {NG_VALUE_ACCESSOR} from "@angular/forms";
// const CUSTOM_DATE_FORMAT: MatDateFormats = {
//   parse: {
//     dateInput: DATE_FORMAT,
//   },
//   display: {
//     dateInput: 'YYYY-MM-DD',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };
// @Component({
//   selector: 'app-form-date-input',
//   imports: [CommonModule, AngularMatModule],
//   standalone: true,
//   template: `
//     <mat-form-field class="form-field" appearance="outline">
//       <div style="display: flex">
//         <input matInput [matDatepicker]="picker" [formControl]="dateControl" placeholder="{{ placeholder }}">
//         <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
//         <mat-datepicker #picker></mat-datepicker>
//       </div>
//     </mat-form-field>
//   `,
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => FormDateInputComponent),
//       multi: true,
//     },
//     {
//       provide: DateAdapter,
//       useClass: MomentDateAdapter,
//       deps: [MAT_DATE_LOCALE],
//     },
//     {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT},
//     DatePipe,
//   ],
//   styles: [],
// })
// export class FormDateInputComponent {
//
// }
