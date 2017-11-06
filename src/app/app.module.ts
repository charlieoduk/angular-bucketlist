import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCheckboxModule, MdGridListModule, MdInputModule, MdIconModule } from '@angular/material';
import { appRouterModule } from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdIconModule,
    BrowserAnimationsModule,
    appRouterModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
