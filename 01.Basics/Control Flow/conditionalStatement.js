// if, else if, else

let a = 20;
let b = 10;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("b is greatere than a");
} else {
  console.log(" a and b are equal");
}

// ********************/

let password;

if (password === 8) {
  console.log("Welcome");
} else if (password < 8) {
  console.log("password is too short");
} else if (password > 8) {
  console.log("password is too long");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}
