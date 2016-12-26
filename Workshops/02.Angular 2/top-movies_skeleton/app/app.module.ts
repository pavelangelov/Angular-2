import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieService } from './core/movie/movie.service';
import { MoviesComponent } from './core/movie/movies-list.component';
import { SingleMovie } from './core/movie/single-movie.component';
import { MovieShort } from './core/movie/movie-short.component';
import { SortMoviesPipe } from './pipes/sortingPipe';
import { FilterMoviesPipe } from './pipes/filtringPipe';

// import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

const appRoutes: Routes = [
  { path: 'movie/:id', component: SingleMovie },
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
    // put all the needed data here
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        MoviesComponent,
        MovieShort,
        SortMoviesPipe,
        FilterMoviesPipe,
        SingleMovie
        ],
    providers: [MovieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
