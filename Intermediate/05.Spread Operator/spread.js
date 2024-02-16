// spread operator is a new addition to the set of operators in JS. It takes in an iterable (ex: functions, arrays, objects) and expands it into individual element.
// The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.

//using a function
function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "green", "blue", "gray"];

// giveMe4(colors);

giveMe4(...colors);

// ******************************
// using arrays

const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];
const concat = [...strNums, ...moreStrNums];

console.log(concat);

let people = ["Harvey", "Mike", "Jessica"];
const allPeople = ["Louis", ...people, "Nikhil"];

console.log(allPeople);

//using objects: shallow copies

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

let person = {
  name: "Nikhil",
  age: 27,
  gender: "male",
};

const clone = { ...person, work: "programmer", location: "idk" };
console.log(clone);
