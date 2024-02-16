//traditional function expression

// function greet(name) {
//   return `Hello ${name}`;
// }

//arrow
//if there is one parameter we don't need to use paranthesis or if we have single line of code then we don't need to use curly braces
// greet = (username) => {
//   return `Hello ${username}`;
// };

// console.log(greet("Harvey"));

// const double = (n) => n * 2;
// console.log(double(5));

/* ************ */

setTimeout(() => {
  console.log(`Hello`);
  setTimeout(() => {
    console.log(`Hey`);
    setTimeout(() => {
      console.log(`Namaste`);
      setTimeout(() => {
        console.log(`hi`);
        setTimeout(() => {
          console.log(`Bonjour`);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
