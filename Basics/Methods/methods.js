// function greet() {
//   return `Hello my name is ${person.name} and I am ${person.age} years old.`;
// }

// const person = {
//   name: "Harvey",
//   age: 40,
//   greet,
// };

// console.log(person.greet());

/* ********************** */

const person = {
  name: "Mike",
  age: 22,
  greet: function () {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
  },
};

console.log(person.greet());
