import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponentComponent } from './create-component/create-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CreateComponentComponent
  ]
})
export class CreateViewModule { }
