// A promise is an object representing the eventual completion or failure of an async operation.

//new Promise(): this object contains both the producing code and calls to the consuming code. It can b used to deal with async operations.

// promise 3 states: pending, fulfilled/ resolved, rejected

//promise: resolved:=> .then(), .finally()
//.then() => is a method used to handle the successful outcome of a promise in JS.
//It takes 2 arguments: (onFulfilled, onRejected)

//promise: rejected:=> .then(), .catch(), .finally()

// function checkNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 === 0) {
//       resolve(`${number} is an even number`);
//     } else {
//       reject(`${number} is an odd number`);
//     }
//   });
// }

// const numToCheck = 5;
// checkNumber(numToCheck)
//   .then((message) => {
//     console.log("Success:", message);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

//************refactorcode */

console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies");
      resolve(["football", "badminton", "chess", "books"]);
    }, 2000);
  });
}

getUserDataFromDB("Nikhil")
  .then((name) => getUserHobbies(name))
  .then((hobby) => console.log(hobby))
  .catch((err) => console.log(err));

console.log("End");
