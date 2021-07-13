'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (!numberOfFilms) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const questionMovie = prompt(
        'Один из последних просмотренных фильмов?',
        ''
      ),
      questionRate = prompt('На сколько оцените его?');
    if (
      questionMovie === '' ||
      questionMovie === null ||
      questionMovie.length > 50 ||
      questionRate === '' ||
      questionRate === null ||
      questionRate.length > 50
    ) {
      alert('Ошибка, пожалуйста, ответь на вопрос');
      i--;
    } else {
      personalMovieDB.movies[questionMovie] = questionRate;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Что-то пошло не так!');
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
  }
}
writeYourGenres();

function showMyDB(hidden) {
  hidden ? console.log('Данные приватны!') : console.log(hidden);
}
showMyDB(personalMovieDB);
