import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx'
import { Movie } from './movie';
import {Observable} from 'rxjs/Observable';


/*
 Author: Chris Sullivan
 Description: this service makes an asynchronous HTTP GET request to the TMDB.org API which then returns a JSON object
 of results. This class takes that JSON and parses through it, making each object into a Movie object, as defined in
 movie.ts. This allows the application to have better control over the data and easier access to it.
 */


@Injectable()
export class ExternalSearchService {
  // the variable used to hold the abservable object
  private movies: Observable<Movie[]>;
  // variable used to hold total pages
  private pages: string;
  // variable used to hold the URL parameters when querying the API
  private extras: URLSearchParams = new URLSearchParams();
  // variable used to hold the API key
  private key     = 'c05c6fc5a59bdbe4f08012258ad12629';
  // the base url of the TMDB.org API for searching movies
  private baseUrl = 'https://api.themoviedb.org/3/search/movie';

  // constructor takes an instance of the HTTP object that is used in order to send HTTP requests
  constructor(private _http: Http) {
    // set the key to the parameter
    this.extras.set('api_key', this.key);
  }
  // used to get the movies that turn up in a search
  // receives a string that is received from search-movies.component.ts which ultimately gets it from the search box on
  // the page
  // returns an obserable object that gives us the stream of data that the API returns
  getMovies(query: string, page: string): Observable<Movie[]> {
    // sets the query to the URL param
    this.extras.set('query', query);
    // sets the page number to search on
    this.extras.set('page', page);
    // makes the HTTP request and maps the data to be in the format of the movie interface
    this.movies = this._http.get(this.baseUrl, {search: this.extras}).map((response: Response) => {
      this.pages = response.json().total_pages;
      return <Movie[]> response.json().results
    });
    // returns the observable
    return this.movies;
  }
  getPages(): string {
    return (parseInt(this.pages, 0) * 10).toString();
  }


}
