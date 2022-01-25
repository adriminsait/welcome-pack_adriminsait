import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCharacterDetailComponentComponent } from './my-character-detail-component/my-character-detail-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AliveComponent } from './my-character-detail-component/alive/alive.component';
import { InfoComponent } from './my-character-detail-component/info/info.component';
import { ProfileComponent } from './my-character-detail-component/profile/profile.component';


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
    BrowserModule,
    HttpClientModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MyCharacterDetailComponentComponent
  ]
})
export class MyCharacterDetailModule { }
