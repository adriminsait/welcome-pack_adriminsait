import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './services/api-call.service';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    ApiCallService
  ],
  exports:[
    
  ]
})
export class ApiCallSharedModule { }
