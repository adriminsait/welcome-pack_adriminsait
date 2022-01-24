import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponentComponent } from './create-component/create-component.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    CreateComponentComponent
  ]
})
export class CreateViewModule { }
