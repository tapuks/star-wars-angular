import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { MOVIES } from '../data/data-movies';

@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Promise<Movie[]>{
    return Promise.resolve(MOVIES);
  }

}
