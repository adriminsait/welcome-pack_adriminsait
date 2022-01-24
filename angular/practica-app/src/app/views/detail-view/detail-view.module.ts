import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './detail-component/profile/profile.component';
import { InfoComponent } from './detail-component/info/info.component';
import { AliveComponent } from './detail-component/alive/alive.component';


@NgModule({
  declarations: [
    DetailComponentComponent,
    ProfileComponent,
    InfoComponent,
    AliveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    DetailComponentComponent
  ],
  providers: [
  ]
})
export class DetailViewModule { }
