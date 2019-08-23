const people = [{
  id: 0,
  name: "John Doe",
  age: 14,
  sex: "male"
}, {
  id: 1,
  name: "Jone Doe",
  age: 16,
  sex: "female"
}];

const findPersonById = (id) => {
  const filteredPerson = people.filter(person => person.id === id);
  return filteredPerson[0];
}

export {
  people,
  findPersonById
};