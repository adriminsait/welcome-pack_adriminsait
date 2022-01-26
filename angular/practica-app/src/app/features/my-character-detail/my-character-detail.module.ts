import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCharacterDetailComponentComponent } from './my-character-detail-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AliveComponent } from './alive/alive.component';
import { InfoComponent } from './info/info.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCharacterDetailRoutingModule } from './my-character-detail-routing.module';


@NgModule({
  declarations: [
    MyCharacterDetailComponentComponent,
    AliveComponent,
    InfoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MyCharacterDetailRoutingModule
  ]
})
export class MyCharacterDetailModule { }
