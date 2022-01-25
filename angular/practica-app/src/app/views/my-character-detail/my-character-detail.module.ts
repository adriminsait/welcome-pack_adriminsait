import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCharacterDetailComponentComponent } from './my-character-detail-component/my-character-detail-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyCharacterDetailComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MyCharacterDetailComponentComponent
  ]
})
export class MyCharacterDetailModule { }
