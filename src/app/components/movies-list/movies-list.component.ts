import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [ MoviesService ]
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];

  constructor( private moviesSrv: MoviesService) { }

  getMovies(): void {
    this.moviesSrv.getMovies().then(movies => this.movies = movies);
  }

  ngOnInit() {
    this.getMovies();
  }

}
