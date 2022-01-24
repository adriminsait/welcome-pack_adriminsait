import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewModule } from './home-view/home-view.module'
import { SharedModule } from '../shared/shared.module';
import { ListViewModule } from './list-view/list-view.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetailViewModule } from './detail-view/detail-view.module';
import { ListPipesModule } from './list-view/list-pipes.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    HomeViewModule,
    ListViewModule,
    SharedModule,
    RouterModule,
    DetailViewModule,
    ListPipesModule
  ],
  providers: [
  ],
  exports: [
    HomeViewModule,
    ListViewModule,
    DetailViewModule,
    ListPipesModule
  ]
})
export class ViewsModule { }
