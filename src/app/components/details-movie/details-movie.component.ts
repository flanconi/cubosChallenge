import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { MovieInfoDetail } from 'src/app/models/movieModels';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class DetailMovie implements OnInit{
  @Input() movie!:MovieInfoDetail;
  
  constructor(){}

  ngOnInit(): void {}
}
