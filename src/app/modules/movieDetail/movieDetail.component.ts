import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaId, MovieInfoDetail, MovieInfoDetailsModel } from 'src/app/models/movieModels';
import { MovieService } from 'src/app/services/movieService.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.scss']
})

export class MovieDetailComponent implements OnInit {
  movieId!:number;
  movieDetail!: MovieInfoDetail;
  genreList: ListaId[];

  constructor(private movieService: MovieService, private route: ActivatedRoute ){
    this.route.params.subscribe(params => this.movieId = params['id']);
    this.genreList = [];
  }

  ngOnInit(): void {
    this.getMovieInfoDetail();
  }

  getMovieInfoDetail():void {
    this.movieService.getMoviesDetails(this.movieId).subscribe({
      next: (res:MovieInfoDetailsModel) => {
        this.movieDetail = new MovieInfoDetail(res.title, res.overview, res.release_date, `${res.vote_average*100/10}%`, this.filterGeneros(res.genres), res.poster_path, res.budget, res.revenue, (res.budget - res.revenue), res.runtime, res.status);
      }
    })
  }

  filterGeneros(listaId:any[]): string[]{
    let listaGenero: string[] = [];
    listaGenero = listaId.map(x => {
      return x.name
    })
    return listaGenero;
  }
}
