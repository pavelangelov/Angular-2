import {Component} from '@angular/core';
const movies = [{
	"Title": "The Shawshank Redemption",
	"Year": "1994",
	"Rated": "R",
	"Released": "14 Oct 1994",
	"Runtime": "142 min",
	"Genre": "Crime, Drama",
	"Director": "Frank Darabont",
	"Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
	"Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
	"Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
	"Language": "English",
	"Country": "USA",
	"Awards": "Nominated for 7 Oscars. Another 19 wins & 30 nominations.",
	"Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
	"Metascore": "80",
	"imdbRating": "9.3",
	"imdbVotes": "1,738,596",
	"imdbID": "tt0111161",
	"Type": "movie",
	"Top250": "1"
}, {
	"Title": "The Godfather",
	"Year": "1972",
	"Rated": "R",
	"Released": "24 Mar 1972",
	"Runtime": "175 min",
	"Genre": "Crime, Drama",
	"Director": "Francis Ford Coppola",
	"Writer": "Mario Puzo (screenplay), Francis Ford Coppola (screenplay), Mario Puzo (novel)",
	"Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
	"Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
	"Language": "English, Italian, Latin",
	"Country": "USA",
	"Awards": "Won 3 Oscars. Another 23 wins & 27 nominations.",
	"Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTc0ZDk1YWItZDZiNi00NTdmLWE0MDctNTVhYTRhMDBmZjNjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
	"Metascore": "100",
	"imdbRating": "9.2",
	"imdbVotes": "1,186,027",
	"imdbID": "tt0068646",
	"Type": "movie",
	"Top250": "2"
}]
@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styles: [
        `tr {
            float: none;
            border-bottom: 1px solid gray;
            padding: 10px 5px;
        }`
    ]
})
export class MoviesComponent {
    private movies: any = [];

    constructor() {
        this.movies = movies; 
    }
}