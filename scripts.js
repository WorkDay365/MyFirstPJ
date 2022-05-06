
let numberOfFilms = prompt('How many movies have you watched? ');

let personalMovieDB = new Object();
personalMovieDB.count  = numberOfFilms;
personalMovieDB.movies = new Object();
personalMovieDB.actors = new Object();
personalMovieDB.genres = new Array();
personalMovieDB.privat = false;

let endFilm    = prompt('One the last film: ');
let evaluation = prompt('How do eveluation it? ');

movies[endFilm] = evaluation;  

console.log(personalMovieDB);