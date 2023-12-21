let userInput;
do {
  userInput = prompt("Enter a positive number: ");
  userInput = parseInt(userInput);
} while (isNaN(userInput) || userInput <= 0);

console.log("You entered: ", userInput);
