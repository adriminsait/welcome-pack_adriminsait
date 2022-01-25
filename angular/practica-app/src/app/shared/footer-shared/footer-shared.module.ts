import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FooterComponentComponent
  ]
})
export class FooterSharedModule { }
