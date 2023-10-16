import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { MovieInfo } from 'src/app/models/movieModels';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MovieCard implements OnInit{
  @Input() movie!: MovieInfo;

  constructor(){}

  ngOnInit(): void {}
}
