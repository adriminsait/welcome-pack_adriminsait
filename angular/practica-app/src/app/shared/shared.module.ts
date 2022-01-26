import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarSharedModule } from './components/navbar-shared/navbar-shared.module';
import { FooterSharedModule } from './components/footer-shared/footer-shared.module';
import { CharacterService } from './services/character.service';
import { ListPipesModule } from './pipes/list-pipes.module';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    NavbarSharedModule,
    FooterSharedModule,
    ListPipesModule
  ],
  providers:[
    CharacterService
  ],
  exports: [
    NavbarSharedModule,
    FooterSharedModule,
    ListPipesModule
  ]
})
export class SharedModule { }
