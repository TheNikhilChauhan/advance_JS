//Sync: here each operation is performed in a sequential and blocking manner.

//Sync
function myFunc() {
  console.log("Inside function");
}

console.log("Start");
myFunc();
console.log("End");

//Async
console.log("Start");

setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 2000);

console.log("End");
