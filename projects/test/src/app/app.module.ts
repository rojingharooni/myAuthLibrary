import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthLibModule } from 'projects/auth-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
