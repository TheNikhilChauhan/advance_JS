// when we provide function as an argument to other function that function is known as callback function.

// const showFunc(function () {}): syntax

// function showCallFunc(fn) {
//   const value = 10;
//   fn(value);
// }

// showCallFunc(function (value) {
//   console.log(value);
// });

function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

// function cb() {
//   console.log(`I am callback function`);
// } or

// greet("nikhil", cb);
greet("nikhil", function cb() {
  console.log(`I am callback function`);
});
