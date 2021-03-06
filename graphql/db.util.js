const filterMatchedMovies = (movies, id) => movies.filter(movie => movie.id === id);

const filterUnmatchedMovies = (movies, id) => movies.filter(movie => movie.id !== id);

const getIndexOfTargetMovie = (movies, id) => movies.findIndex(movie => movie.id === id);

const getLastElementOfMovies = (movies) => movies[movies.length - 1];

export {
  filterMatchedMovies,
  filterUnmatchedMovies,
  getIndexOfTargetMovie,
  getLastElementOfMovies
}