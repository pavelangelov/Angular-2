import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MovieService } from './movie.service';
import { MovieDetails} from '../models/movie-details';

@Component({
    providers: [MovieService],
    templateUrl: './single-movie.component.html',
    styles: [
    ]
})
export class SingleMovie implements OnInit {
    private movie: MovieDetails;
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

    getKey(key: string) {
        if (this.movie) {
            return this.movie[key];
        }
    }
}
