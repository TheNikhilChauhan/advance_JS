// function callbackHell(callback) {
//   setTimeout(() => {
//     const data = "Inside (callbackHell) Function";
//     console.log(data);
//     callback(data);
//   }, 2000);
// }

// function firstFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - Processed First`;
//     console.log("Inside (firstFunc) Function");
//     callback(processedData);
//   }, 1000);
// }

// function secondFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - Processed Second`;
//     console.log("Inside (secondFunc) Function.");
//     callback(processedData);
//   }, 1500);
// }

// // Callback Hell
// callbackHell((data) => {
//   firstFunc(data, (processedData1) => {
//     secondFunc(processedData1, (processedData2) => {
//       console.log(`Final result of all functions: ${processedData2}`);
//     });
//   });
// });

// -----------------------------------------------------

// ********* Example 2
// Callback is not always asynchronous

// This is the example of synchronous callback function
// console.log("Start"); // first

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((r) => {
//   console.log(r); // second
// });

// console.log("End"); // third

//*******************Exercise */

function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log(`Getting User Name `);
    callback(name);
  }, 2000);
}

function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log(`Getting User Hobbies }`);
    callback(["football", "badminton", "chess", "books"]);
  }, 2000);
}

getUserDataFromDB("Nikhil", (data) => {
  console.log(data);
  getUserHobbies(data, (hobby) => {
    console.log(hobby);
  });
});
