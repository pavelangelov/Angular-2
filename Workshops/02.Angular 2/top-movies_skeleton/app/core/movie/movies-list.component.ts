import { Component } from '@angular/core';
import { Http } from '@angular/http';

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
    private _sortBy: string = 'Title';
    private _orderBy: string = 'Asc';
    private _search: string;

    constructor(private http: Http) {
        this.http.get('./data/movies.json')
            .map(res => res.json())
            .subscribe(data => this.movies = data,
            err => console.log(err),
            () => console.log(this.movies));
    }

    setSearchMovie(value?: string) {
        this._search = value;
    }

    getSearchMovie() {
        return this._search;
    }

    sortBy(value?: string) {
        if (value) {
            this._sortBy = value;
        } else {
            return this._sortBy;
        }
    }

    orderBy(value?: string) {
        if (value) {
            this._orderBy = value;
        } else {
            return this._orderBy;
        }
    }
}
