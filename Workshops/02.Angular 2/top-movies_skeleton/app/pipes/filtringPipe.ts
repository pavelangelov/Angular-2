import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterMoviesPipe implements PipeTransform {
    transform(movies: any[], filterBy?: string) {
        if (filterBy && filterBy.length >= 1) {
            return movies.filter(x => x.Title.toLowerCase().indexOf(filterBy.toLowerCase()) > -1);
        } else {
            return movies;
        }
    }
}
