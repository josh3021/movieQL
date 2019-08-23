import {
  filterMatchedMovies,
  filterUnmatchedMovies,
  getLastElementOfMovies
} from './db.util';

let movies = [{
  id: 0,
  name: "엄복동",
  score: 172212,
  rate: "TWELVE"
}, {
  id: 1,
  name: "클레멘타인",
  score: 10,
  rate: "FIFTEEN"
}, {
  id: 2,
  name: "리얼",
  score: 2,
  rate: "RRATED"
}, {
  id: 3,
  name: "뽀로로",
  score: 10,
  rate: "ALL"
}];

const createMovie = ({
  name,
  score,
  rate
}) => {
  const newMovie = {
    id: getLastElementOfMovies(movies).id + 1,
    name,
    score,
    rate
  };

  movies.push(newMovie);
  return newMovie;
}

const retrieveMoviesById = (id) => {
  console.log(id)
  const filteredMovies = filterMatchedMovies(movies, id);
  return filteredMovies[0];
}

const deleteMovieById = ({
  id
}) => {
  const filteredMovies = filterUnmatchedMovies(movies, id);
  if (filteredMovies) {
    movies = filteredMovies;
    return filteredMovies;
  } else {
    return movies;
  }
}

export {
  movies,
  createMovie,
  retrieveMoviesById,
  deleteMovieById
};