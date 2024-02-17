// Default function parameters, introduced in ECMAScript 6 allows us to assign default values to function parameters. When a function is called and an argument is not provided for a parameter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined.

// function countTo5(count = true) {
//   if (count === true) {
//     for (let i = 1; i <= 5; i++) {
//       console.log(`Count: ${(count, i)}`);
//     }
//   }
// }
// console.log(countTo5());

function ratings(rate = 0) {
  if (rate === 5) {
    console.log(`High Ratings :) `);
  } else if (rate === 0) {
    console.log(`Low Ratings :(`);
  }
}

ratings(0);

function multiply(a, b = 1) {
  console.log(a * b);
}

multiply(2);
