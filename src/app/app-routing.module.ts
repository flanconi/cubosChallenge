import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MovieDetailComponent } from './modules/movieDetail/movieDetail.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }