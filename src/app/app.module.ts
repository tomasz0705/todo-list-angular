import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import loacalePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(loacalePl);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
