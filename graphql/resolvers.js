import {
  people,
  findPersonById
} from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {
      id
    }) => findPersonById(id) // resolvers(obj, args, context, info)
  }
}

export default resolvers;