// the rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic function in JS.

// function user(x, ...userData) {
//   console.log(x);
//   console.log(userData);
// }

// user("Nik", "27", "programmer", "badminton");

// rest operator must be the last parameter

function person(firstName, lastName, ...hobbies) {
  console.log("FirstName", firstName);
  console.log("LastName", lastName);
  console.log("Hobbies", hobbies);
}

person("harvey", "specter", "golf", "badminton", "chess", "reading");
