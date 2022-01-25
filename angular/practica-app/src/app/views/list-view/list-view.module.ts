import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list-component/list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardComponent } from './list-component/card/card.component';
import { ListPipesModule } from './list-pipes.module';
import { CardMyCharacterComponent } from './list-component/card-my-character/card-my-character.component';


@NgModule({
  declarations: [
    ListComponentComponent,
    CardComponent,
    CardMyCharacterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule, 
    RouterModule,
    ListPipesModule
  ],
  providers: [
  ],
  exports:[
    ListComponentComponent,
    ListPipesModule
  ]
})
export class ListViewModule { }
