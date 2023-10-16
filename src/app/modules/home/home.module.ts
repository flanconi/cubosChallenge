import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCard } from 'src/app/components/movie-card/movie-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, MovieCard],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
