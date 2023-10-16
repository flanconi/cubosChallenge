import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaId, MovieInfo, MovieInfoModel } from 'src/app/models/movieModels';
import { MovieService } from 'src/app/services/movieService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  moviesList: MovieInfo[];
  moviesListFilter: MovieInfo[];
  genreList: ListaId[];
  buscarKey: string;

  constructor(private movieService: MovieService, private router: Router){
    this.moviesList = [];
    this.moviesListFilter = [];
    this.genreList = [];
    this.buscarKey = '';
  }

  ngOnInit(): void {
    this.listaGeneroFilme();
    this.movieService.getMovies().subscribe({
      next: (res) => {
        res.results.map((x: MovieInfoModel) => {
          let movieObject = new MovieInfo(x.id, x.title, x.overview, x.release_date, `${x.vote_average*100/10}%` , this.filterGeneros(x.genre_ids), x.poster_path);
          this.moviesList.push(movieObject);
        })
      }
    })
    this.moviesListFilter = this.moviesList;
  }
  
  listaGeneroFilme():void{
    this.movieService.getGenreList().subscribe({
      next: (res: any) =>{
        this.genreList = res.genres;        
      }
    })
  }

  filterGeneros(listaId:number[]): string[]{
    let listaGenero: string[] = [];
    listaId.map(x => {
      this.genreList.map( (y: ListaId) => {
        if(x === y.id){
          listaGenero.push(y.name);
        }
      })
    })
    return listaGenero;
  }

  buscaFilme(){
    debugger
    if(this.buscarKey){
      this.moviesListFilter = this.moviesList.filter(x =>{
        let movieFilter;
        x.genre_ids.filter(y => {
          if(y.toLocaleLowerCase().includes(this.buscarKey.toLocaleLowerCase()) || x.title.toLocaleLowerCase().includes(this.buscarKey.toLocaleLowerCase())){
            movieFilter = x;
            return;
          } 
          return '';
        })
        return movieFilter;
      })
    } else{
      this.moviesListFilter = this.moviesList
    }
  }

  goToMovieDetail(id:number):void {
    this.router.navigate([`/movie/${id}`])
  }
}
