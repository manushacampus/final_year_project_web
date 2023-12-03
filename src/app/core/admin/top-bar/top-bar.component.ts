import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public isMenuOpen = false;
  hidden = false;
  @Output() event = new EventEmitter<boolean>();

  constructor(
    private router: Router,
  ) { }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  ngOnInit(): void {
  }
  sendNavState(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.event.emit(this.isMenuOpen);
  }

  logout() {
    // this.authenticationService.logout();
    this.router.navigateByUrl("/")
  }


  async resetPassword() {
    // let dialogConfig = new MatDialogConfig();
    // // @ts-ignore
    // let user = await this.userService.getByUserName(this.user?.username);
    // dialogConfig.data = user.data
    // const dialogRef = this.dialog.open(PasswordResetComponent,dialogConfig);
    // dialogRef.afterClosed()?.pipe(takeUntil(this.subKill$)).subscribe(value => {
    //   console.log(value)
    //   if (value){
    //     this.router.navigateByUrl("/login");
    //   }
    // })
  }
}
