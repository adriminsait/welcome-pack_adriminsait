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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCharactersViewModule } from './my-characters-view/my-characters-view.module';
import { MyCharacterDetailModule } from './my-character-detail/my-character-detail.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    HomeViewModule,
    ListViewModule,
    DetailViewModule,
    CreateViewModule,
    MyCharactersViewModule,
    MyCharacterDetailModule,
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
    MyCharactersViewModule,
    ListPipesModule
  ]
})
export class ViewsModule { }
