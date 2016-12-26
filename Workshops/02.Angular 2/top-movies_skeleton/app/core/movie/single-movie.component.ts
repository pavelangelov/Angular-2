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

    async getMovie(id: string) {
        await this.service.getSingleMovie(id, (data: MovieDetails) => {
            this.movie = data;
            console.log('Get Movie data -> ');
            console.log(data.Title);
        });
    }

    get title() {
        if (this.movie) {
            return this.movie.Title;
        } else {
            return 'This movie doesn`t have title :(';
        }
    }

    get poster() {
       if (this.movie) {
            return this.movie.Poster;
        }
    }
}