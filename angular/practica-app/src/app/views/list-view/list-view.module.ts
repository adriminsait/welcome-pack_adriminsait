import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list-component/list-component.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './list-component/services/api-call.service';

@NgModule({
  declarations: [
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    ApiCallService
  ],
  exports:[
    ListComponentComponent
  ]
})
export class ListViewModule { }
