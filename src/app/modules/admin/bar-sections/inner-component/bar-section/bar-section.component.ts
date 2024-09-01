import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CategoryFilterService} from "../../../../../core/services/utils/category-filter.service";
import {AuthService} from "../../../../../auth/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-bar-section',
  templateUrl: './bar-section.component.html',
  styleUrls: ['./bar-section.component.scss']
})
export class BarSectionComponent {
  constructor(private router: Router,
              private filterSection:CategoryFilterService,
              private authService: AuthService,
              private toastrService:ToastrService
  ) {
  }


  panelOpenState:boolean=false;

  addNew() {
    const userSubRole = this.authService.getLoginUser().designation;

    if (userSubRole=="SUPERVISOR"){
      this.router.navigate(['admin/bar-section/form']);
    }
    else {
      this.toastrService.error("You Cant Access")
      console.log("Cant log")
    }

  }

  setMode(mode:any) {
    this.filterSection.setFilterMode(mode)
  }
}
