// console.log(window);
// console.log(this); //in this case this keyword will refer to the window object

// console.log(this === window); //true

// window.firstName = "Nikhil";
// this.lastName = "Chauhan";
// console.log(window);

//********************* */

// const obj = {
//   firstName: "Nikhil",
//   lastName: "Chauhan",
//   fullName: function () {
//     return this; //owner obj so it returns whole obj
//   },
// };

// const res = obj.fullName();
// console.log(res);

//********** */

// const obj = {
//   firstName: "Nikhil",
//   lastName: "Chauhan",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const res = obj.fullName();
// console.log(res);

//arrow fun
// const obj = {
//   firstName: "Nikhil",
//   lastName: "Chauhan",
//   fullName: () => {
//     // return `${this.firstName} ${this.lastName}`; //output: undefined
//     // return this; // output: {}

//   },
// };

// const res = obj.fullName();
// console.log(res);

//**************** */

const person = {
  name: "Nikhil",
  age: 27,
  greetRegular: function () {
    return `Hello my name is ${this.name} and I'm ${this.age} years old`;
  },
  greetArrow: () => {
    return `Hello my name is ${this.name} and I'm ${this.age} years old`;
  },
};

const res = person.greetRegular();
const res2 = person.greetArrow();
console.log(res);
console.log(res2);
