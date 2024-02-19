//async fun: is designed to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute.

//async is a keyword use to turn function declaration to async function

//await operator is used to wait for a promise. It can only be used inside an async function within regular JS code.

function fetchDataFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data retrieved from the server");
    }, 2000);
  });
}

async function getUserData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining tasks can be executed here.");
  } catch (error) {
    console.log("Error:", error);
  }
}

getUserData();

//*********** */

console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Football", "Singing", "Solving Math"]);
    }, 2000);
  });
}

async function showUserHobbies() {
  try {
    const name = await getUserDataFromDB("Nikhil");
    const hobby = await getUserHobbies();
    console.log(hobby);
  } catch (error) {
    console.log(error);
  }
}

showUserHobbies();

console.log("End");
