import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SearchModule} from './search/search.module';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
