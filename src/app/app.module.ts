import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChisteComponent } from './chiste/chiste.component';
import {HttpClientModule} from "@angular/common/http";
import { InfoComponent } from './info/info.component';
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    ChisteComponent,
    InfoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
