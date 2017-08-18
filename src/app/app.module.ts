import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbdAlertClosableComponent } from './ngbd-alert/ngbd-alert.component';
import {ExternalSearchService} from './external-search.service';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    NgbdAlertClosableComponent,
    SearchMoviesComponent
  ],
  imports: [NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ExternalSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
