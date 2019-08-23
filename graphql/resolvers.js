import {
  movies,
  createMovie,
  retrieveMoviesById,
  deleteMovieById
} from './db';

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, {
      id
    }) => retrieveMoviesById(id) // resolvers(obj, args, context, info)
  },

  Mutation: {
    createMovie: (_, {
      name,
      score,
      rate
    }) => createMovie({
      name,
      score,
      rate
    }),

    deleteMovie: (_, {
      id
    }) => deleteMovieById({
      id
    })
  }
}

export default resolvers;