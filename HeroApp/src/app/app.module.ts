import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import {heroService} from './services/heroService';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';

import { Hero } from '../models/hero';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [heroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
