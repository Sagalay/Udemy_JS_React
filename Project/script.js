'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (!personalMovieDB.count) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms() {
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
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Что-то пошло не так!');
    }
  },
  writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre === null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log('Данные приватны!');
    }
  },
  toggleVisibleMyDB() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
