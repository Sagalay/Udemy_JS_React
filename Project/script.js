'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

while (!numberOfFilms) {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const questionMovie = prompt('Один из последних просмотренных фильмов?', ''),
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

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('Что-то пошло не так!');
}

console.log(personalMovieDB);
