import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DescriptionComponent } from './home-component/description/description.component';
import { InfoComponent } from './home-component/info/info.component';
import { WorkingComponent } from './home-component/working/working.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


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
    SharedModule
  ],
  exports: [
    HomeComponentComponent
  ]
})
export class HomeViewModule { }
