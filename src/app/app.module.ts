import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {ApprovalDialogComponent} from "./commons/dialogs/approval-dialog/approval-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { UtilityManagementComponent } from './modules/admin/utility-management/utility-management.component';
import { WebsiteManagementComponent } from './modules/admin/website-management/website-management.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalDialogComponent,
    UtilityManagementComponent,
    WebsiteManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({timeOut: 3000}),
    MatButtonModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
