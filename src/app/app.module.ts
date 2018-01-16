import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchModule} from './search/search.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'fr'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
