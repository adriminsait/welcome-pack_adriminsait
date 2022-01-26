import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCharactersComponentComponent } from './my-characters-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MyCharactersViewsRoutingModule } from './my-characters-view-routing.module';


@NgModule({
  declarations: [
    MyCharactersComponentComponent,
    CardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    MyCharactersViewsRoutingModule
  ]
})
export class MyCharactersViewModule { }
