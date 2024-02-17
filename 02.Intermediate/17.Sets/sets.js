//Set is a built-in data structure introduced in ES6 that represents a collection of unique values. Unlike arrays, set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occure only once within a set.

//set objects: are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.

// const mySet = new Set(); //empty set
// const initialValues = [1, 2, 3];
// const mySet = new Set(initialValues); //list added
// console.log(mySet);

// const mySet = new Set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("mango");
// mySet.add("apple"); //duplicate value will be ignored
// console.log(mySet);

// console.log(mySet.has("mango"));

// mySet.delete("banana");
// console.log(mySet);

// mySet.clear();
// console.log(mySet);

//******************* */

const set = new Set();

set.add();
set.add("string");
set.add({ name: "Nikhil" });
set.add(27);

console.log(set.size);
console.log(set);
console.log(set.keys());
console.log(set.has(27));

set.delete(27);
console.log(set);

for (let item of set) {
  console.log(item);
}
