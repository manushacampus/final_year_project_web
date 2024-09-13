import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  hidden = false;
  constructor(
    private router: Router,
    private authService:AuthService
  ) { }

  scrollToSection(section: string) {
    this.router.navigate([], { fragment: section }).then(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  getLoginUser(){
    return this.authService.getLoginUser();
  }
  logout() {
    this.authService.logoutCustomer()

  }

}
