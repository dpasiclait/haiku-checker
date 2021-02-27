import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AngularMaterialModule
} from './angular-material.module';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  HttpClientModule
} from '@angular/common/http';

import {
  AppComponent
} from './app.component';
import {
  FooterComponent
} from './footer/footer.component';
import {
  HaikuModule
} from './haiku/haiku.module';
import {
  HeaderComponent
} from './header/header.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import {
  ErrorComponent
} from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HaikuModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
