import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './api-call-shared/services/api-call.service';
import { NavbarSharedModule } from './navbar-shared/navbar-shared.module';
import { FooterSharedModule } from './footer-shared/footer-shared.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  providers:[
    ApiCallService
  ],
  exports: [
    NavbarSharedModule,
    FooterSharedModule
  ]
})
export class SharedModule { }
