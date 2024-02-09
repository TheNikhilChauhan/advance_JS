// destructuring allows us to "unpack" values from data-structures (arrays, objects) into separate distinct variables.

// const nums = ["one", "two", "three"];

// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);

//instead of doing that we can use destructuring incase of large data

// const [one] = nums;
// console.log(one);

// const [red, yellow, blue, orange] = nums;
// console.log(orange);

// let a, b;
// [a = 5, b = 6] = [one];
// console.log(a, b);

// function fun() {
//   return [1, 2, 3];
// }

//skipping the elements
// const [a, , b] = fun();
// console.log(a);
// console.log(b);

//assinging rest of an array to a variable
const [a, ...b] = ["one", "two", "three", 23, false, 45, ["one"]];
console.log(a);
console.log(b);

const colors = ["red", "green", "blue", "orange", "yellow"];

const [color1, color2, color3] = colors;
console.log(color1);
console.log(color2);
console.log(color3);
