import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieService {
    private baseUrl = 'http://www.omdbapi.com/?';

    constructor(private http: Http) {
    }

    getMoviesByTitle(title: string, page: number, callback: Function): any[] {
        page = page >= 1 ? page : 1;
        if (title && title.length >= 3) {
            this.http.get(this.baseUrl + `plot=full&r=json&s=${title}&page=${page}`)
                .subscribe(data => {
                    callback(data.json());
                },
                err => console.log(err),
            );
        } else {
            return [];
        }
    }

    getSingleMovie(imdbId: string, callback: Function) {
        this.http.get(this.baseUrl + `i=${imdbId}&plot=short&r=json`)
                .subscribe(data => {
                    console.log("data in service:");
                    console.log(data);
                    callback(data.json());
                },
                err => console.log(err),
            );
    }
}
