import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCharactersComponentComponent } from './my-characters-component/my-characters-component.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardComponent } from './my-characters-component/card/card.component';



@NgModule({
  declarations: [
    MyCharactersComponentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MyCharactersComponentComponent
  ]
})
export class MyCharactersViewModule { }
