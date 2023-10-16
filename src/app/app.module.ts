import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailModule } from './modules/movieDetail/movieDetail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    MovieDetailModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
