import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    DetailComponentComponent
  ],
  providers: [
  ]
})
export class DetailViewModule { }
