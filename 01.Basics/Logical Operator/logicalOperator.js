// 1. Logical AND (&&)
// true if both the operands/ booleans are true, else evaluates to false

let isAdult = true;
let hasLicense = true;

if (isAdult && hasLicense) {
  console.log("You are an adut and you have a license.");
} else {
  console.log("You are either not an adult or you don't have a license.");
}

// 2. Logical OR (||)
// true if either of the operands/ booleans are true, evaluates to false if both are false

let isStudent = false;
let isEmployee = true;

if (isStudent || isEmployee) {
  console.log("You are either a student or an employee.");
} else {
  console.log("You are neither a student nor an employee.");
}
// 3. Logical NOT (!)
// true if the operands is false and vice-versa
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("You are not logged in.");
} else {
  console.log("You are logged in.");
}
