import { NgModule } from '@angular/core';

import { MovieDetailComponent } from './movieDetail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DetailMovie } from 'src/app/components/details-movie/details-movie.component';

@NgModule({
  declarations: [MovieDetailComponent, DetailMovie],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [MovieDetailComponent]
})
export class MovieDetailModule {}
