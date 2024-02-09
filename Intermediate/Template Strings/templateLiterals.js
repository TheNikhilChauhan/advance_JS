// Template strings are also known as template literals, this allows JS to create strings with embedded expressions.Denoted by: (``) backticks. It provides a more flexible and concise way to construct strings.

// console.log(
//   "this is some\
// random text"
// );

console.log(`this is some
random text`);

// const num = 2+2
console.log(`${2 + 2}`);

const firstName = "Harvey";
const lastName = "Specter";

console.log(`${firstName} ${lastName}`);

function greet() {
  return `Goodmorning, have a nice day!`;
}

console.log(`${greet()}`);
