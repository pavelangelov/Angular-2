import { Component } from '@angular/core';

import { MovieService } from './movie.service';
import { SimpleChange } from '@angular/core';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    providers: [MovieService],
    styles: [
        `tr {
            float: none;
            border-bottom: 1px solid gray;
        },
        li.page-item {
            cursor: pointer;
        }`
    ]
})
export class MoviesComponent {
    private movies: any = [];
    private _sortBy: string = 'Title';
    private _orderBy: string = 'Asc';
    private _search: string = 'bat';
    private pages: number[] = [];
    private defaultMovies = [{
        Poster: 'https://i.stack.imgur.com/ArhPo.gif',
        Title: 'No matches',
        Rating: 0,
        Year: 2016
    }];

    constructor(private service: MovieService) {
        this.movies = this.defaultMovies;
    }

    setSearchMovie(value?: string) {
        this._search = value;
    }

    getSearchMovie() {
        return this._search;
    }

    async getMovieFromImdb(title: string, page: number) {
        await this.service.getMoviesByTitle(title, page, (data: any) => {
            this.movies = data.Search || this.defaultMovies;
            let arrLen = (+data.totalResults / 10) | 0;
            let value = 1;
            this.pages = new Array(arrLen).fill(value, 0).map((v, i) => v + i);
        });
    }

    getMovies() {
        return this.movies;
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
    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        console.log('ngOnChanges - tags = ' + changes['tags'].currentValue);
    }
}
