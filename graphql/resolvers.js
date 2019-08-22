const examplePerson = {
  name: "John Doe",
  age: 14,
  sex: "male"
}

const resolvers = {
  Query: {
    person: () => examplePerson
  }
}

export default resolvers;