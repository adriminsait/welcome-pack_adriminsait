import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewModule } from './home-view/home-view.module'
import { SharedModule } from '../shared/shared.module';
import { ListViewModule } from './list-view/list-view.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './list-view/list-component/services/api-call.service';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    HomeViewModule,
    ListViewModule,
    SharedModule
  ],
  providers: [
    ApiCallService
  ],
  exports: [
    HomeViewModule,
    ListViewModule
  ]
})
export class ViewsModule { }
