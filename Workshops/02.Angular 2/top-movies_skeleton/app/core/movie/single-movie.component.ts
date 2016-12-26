import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { MovieService } from './movie.service';
import { MovieDetails} from '../models/movie-details';

@Component({
    selector: 'single-movie',
    providers: [MovieService],
    templateUrl: './single-movie.component.html',
    styles: [
    ]
})
export class SingleMovie implements OnInit {
    movie: MovieDetails;
    private movieId: string;

    constructor(
        private service: MovieService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.movieId = this.route.params._value.id;
        this.getMovie(this.movieId);
    }

    getMovie(id: string) {
        this.service.getSingleMovie(id, (data: MovieDetails) => {
            this.movie = data;
        });
    }

    get title() {
        if (this.movie) {
            return this.movie.Title;
        } else {
            return 'Missing movie info :(';
        }
    }

    get poster() {
       if (this.movie) {
            return this.movie.Poster;
        }
    }
}