import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './views/list-view/list-component/services/api-call.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ViewsModule,
    SharedModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent], 
  
  exports: [
    SharedModule
  ]
})
export class AppModule { }
