// object: key: value pair

const person = {
  firstName: "Nikhil",
  lastName: "Chauhan",
  age: 27,
  location: ["Planet", "Earth"],
  isProgrammer: true,
};
console.log(person);

//accessing items of an object using dot notation
console.log(person.firstName);

//another method is:
console.log(person["lastName"]);

// delete an item:
delete person.location;
console.log(person);
