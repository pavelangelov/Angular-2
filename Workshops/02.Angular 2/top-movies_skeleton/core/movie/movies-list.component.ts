import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { MovieShort } from './movie-short.component';

@Component({
	selector: 'movies-list',
	templateUrl: './movies-list.component.html',
	styles: [
		`tr {
            float: none;
            border-bottom: 1px solid gray;
        }`
	]
})
export class MoviesComponent {
	private movies: MovieShort[] = [];

	constructor(private http: Http) {
		this.http.get('./data/movies.json')
			.map(res => res.json())
			.subscribe(data => this.movies = data,
						err => console.log(err),
						() => console.log(this.movies));
	}
}