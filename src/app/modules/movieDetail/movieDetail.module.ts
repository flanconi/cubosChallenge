import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { MovieDetailComponent } from './movieDetail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DetailMovie } from 'src/app/components/details-movie/details-movie.component';
import { SafePipe } from 'src/app/pipe/sanitizer-pipe/sanitizer.component';

@NgModule({
  declarations: [MovieDetailComponent, DetailMovie, SafePipe],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: '$',
    },
  ],
  bootstrap: [MovieDetailComponent]
})
export class MovieDetailModule {}
