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
import { CreateViewModule } from './create-view/create-view.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CommonModule,

    HomeViewModule,
    ListViewModule,
    DetailViewModule,
    CreateViewModule,
    SharedModule,
    ListPipesModule
  ],
  providers: [
  ],
  exports: [
    HomeViewModule,
    ListViewModule,
    DetailViewModule,
    CreateViewModule,
    ListPipesModule
  ]
})
export class ViewsModule { }
