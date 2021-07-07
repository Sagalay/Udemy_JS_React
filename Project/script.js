'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const questionMovie = prompt('Один из последних просмотренных фильмов?', ''),
  questionRate = prompt('На сколько оцените его?'),
  questionMovie2 = prompt('Один из последних просмотренных фильмов?'),
  questionRate2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[questionMovie] = questionRate;
personalMovieDB.movies[questionMovie2] = questionRate2;
