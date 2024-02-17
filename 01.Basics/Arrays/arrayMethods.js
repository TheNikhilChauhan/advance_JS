const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

// 1. push
// fruits.push("banana");
// console.log(fruits);

// //2. pop: removes last element of the array
// let removed = fruits.pop();
// console.log(removed);

// //3. shift(): removes the first element of an array
// let firstRemoved = fruits.shift();
// console.log(firstRemoved);

// //4. unshift(): adds new element at the beginning of the array
// fruits.unshift("orange");
// console.log(fruits);

//5. concat(): combine two or more arrays
// let marvel = ["iron man", "spiderman"];
// console.log(fruits.concat(marvel));

//6. reverse()
console.log(fruits.reverse());

//7. slice(): new array with a portion of selected items
console.log(fruits.slice(0, 3));
console.log(fruits);

//8. splice(): adds or replaces element of an array and overwrites the original array
console.log(fruits.splice(0, 3));
console.log(fruits);
