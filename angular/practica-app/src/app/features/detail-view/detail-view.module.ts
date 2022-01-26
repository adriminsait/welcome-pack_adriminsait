import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponentComponent } from './detail-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { AliveComponent } from './alive/alive.component';
import { DetailViewRoutingModule } from './detail-view-routing-module';


@NgModule({
  declarations: [
    DetailComponentComponent,
    ProfileComponent,
    InfoComponent,
    AliveComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    DetailViewRoutingModule
  ]
})
export class DetailViewModule { }
