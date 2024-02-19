// In JavaScript, try and catch are keywords used to implement error handling. Error handling is essential when writing code to gracefully handle unexpected errors and exceptions that may occur during program execution. The try and catch blocks work together to enable developers to catch and handle errors, preventing them from crashing the entire application.

function parseJSON(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    return parsedData;
  } catch (error) {
    console.log("An error occurred while parsing JSON:", error.message);
    return null;
  }
}

const validJSON = `{
    "name": "Harvey",
    "age": 40
}`;

const invalidJSON = `{
    "name": "Louis",
    "age": 42,
}`;

const result1 = parseJSON(validJSON);
console.log(result1);

const result2 = parseJSON(invalidJSON);
console.log(result2);
