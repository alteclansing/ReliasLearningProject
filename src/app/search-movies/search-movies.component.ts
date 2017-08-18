import {Component,  OnDestroy, OnInit} from '@angular/core';
import {ExternalSearchService} from '../external-search.service';
import {Movie} from '../movie';
import {Subject} from 'rxjs/Subject';

/*
Author:      Chris Sullivan
Project For: Relias Learning Application
Description: A simple search form that sends a query to the TMDB.org API and searches for movies with a similar title
             to the query given.
             This component is considered the model behind the view(HTML page).
 */
@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>()
  // variable used to hold pages
  pages: string;
  // variable to hold current page
  page: string;
  movies: Movie[];
  // user input from searchbox
  query: string;
  // query is saved for continued search
  savedQuery: string;
  // in case of no description, this text is displayed using *ngIf
  noData = 'There is currently no description associated with this movie...';
  // in case of no date, this text is displayed using *ngIf
  noDate = 'Date is coming soon...';
  nextPage: number;

  // the constructor takes an instance of the ExteralSearchService which makes the GET request to the API
  constructor(private _externalSearch: ExternalSearchService) {
    this.page = '1';
  }

  // gets the movie data by using the ExternalSearchService and passing in the search query, this method is avaliable
  // to call from the model.
  getMovies(queryString: string, page: string) {
    this._externalSearch.getMovies(queryString, page).takeUntil(this.ngUnsubscribe)
      .subscribe( movies => this.movies = movies, err => console.error(err));
    this.savedQuery = queryString;
    this.query = '';

  }
  getPages(): string {
    this.pages = this._externalSearch.getPages();
    return this.pages;
  }
  loadPage(page: string) {
    this.getMovies(this.savedQuery, page);
    document.body.scrollTop = document.documentElement.scrollTop = 500;
  }
  // do nothing right now
  ngOnInit() {
  }
  // cleans up any subscriptions that are still open
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
