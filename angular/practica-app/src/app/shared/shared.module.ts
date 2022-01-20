import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSharedModule } from './navbar-shared/navbar-shared.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarSharedModule,
    RouterModule
  ],
  exports: [
    NavbarSharedModule
  ]
})
export class SharedModule { }
