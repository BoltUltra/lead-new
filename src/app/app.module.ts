import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NigComponent } from './nig/nig.component';
import { IntlComponent } from './intl/intl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NigComponent, IntlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
