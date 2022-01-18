import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponentComponent } from './father-component/father-component.component';
import { SonComponentComponent } from './father-component/son-component/son-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponentComponent,
    SonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
