import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardMyCharacterComponent } from './card-my-character/card-my-character.component';
import { ListViewRoutingModule } from './list-view-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListComponentComponent,
    CardComponent,
    CardMyCharacterComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    ListViewRoutingModule
  ],
  providers: [
  ],
  exports:[
    ListComponentComponent
  ]
})
export class ListViewModule { }
