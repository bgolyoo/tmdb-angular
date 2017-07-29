import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';

import { ApiKeyGuard } from './api-key/api-key.guard';
import { ApiKeyService } from './api-key/api-key.service';
import { TmdbService } from './tmdb/tmdb.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [
    ApiKeyGuard,
    ApiKeyService,
    TmdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
