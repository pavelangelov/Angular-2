import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetails } from '../core/models/movie-model';

@Pipe({
    name: "sort"
})
export class SortMoviesPipe implements PipeTransform {
    transform(movies: any[], sortBy?: string, orderBy?: string) {
        if (sortBy) {
            if (orderBy) {
                if (orderBy == "Desc"){
                    movies.sort((x, y) => y[sortBy].toString().localeCompare(x[sortBy].toString()));
                }
                else {

                movies.sort((x, y) => x[sortBy].toString().localeCompare(y[sortBy].toString()));
                }
            }

            return movies;
        }
        else {
            return movies.sort((x, y) => x.Title.localeCompare(y.Title))

        }
    }
}