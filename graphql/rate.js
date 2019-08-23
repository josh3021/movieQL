import {
  GraphQLEnumType
} from 'graphql';

const rateEnumType = new GraphQLEnumType({
  name: "rateEnum",
  values: {
    ALL: {
      value: 0
    },
    TWELVE: {
      value: 1,

    },
    FIFTEEN: {
      value: 2,

    },
    RRATED: {
      value: 3
    }
  }
});

export default rateEnumType;