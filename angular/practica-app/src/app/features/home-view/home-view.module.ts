import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component.component';
import { DescriptionComponent } from './description/description.component';
import { InfoComponent } from './info/info.component';
import { WorkingComponent } from './working/working.component';
import { FormsModule } from '@angular/forms';
import { HomeViewRoutingModule } from './home-view-routing.module';


@NgModule({
  declarations: [
    HomeComponentComponent,
    DescriptionComponent,
    InfoComponent,
    WorkingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeViewRoutingModule
  ]
})

export class HomeViewModule { }
