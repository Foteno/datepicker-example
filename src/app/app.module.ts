import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NggModule} from "@sebgroup/green-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NggModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
