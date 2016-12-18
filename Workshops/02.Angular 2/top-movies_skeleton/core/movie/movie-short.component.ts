import { Component, Input } from '@angular/core';
import { MovieDetails } from '../models/movie-model';

@Component({
    selector: '[movie]',
    templateUrl: './movie-short.component.html',
    styles: [
        `td {
            padding: 10px 5px;
        }`
    ]
})
export class MovieShort {
    @Input() movie: MovieDetails
    get title(): string {
        return this.movie.Title;
    }

    get poster(): string {
        return this.movie.Poster;
    }

    get imdbRating(): string {
        return this.movie.imdbRating;
    }

    get year(): string {
        return this.movie.Year;
    }
}
