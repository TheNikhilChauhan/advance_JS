//map is a built-in data structure introduced in ES6 that allows you to store key-value pairs where both the keys adn values can be of any data type. It is similar to an object, but with a few key differences.

//Keys can be of nay data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to us any data types as keys, including numberm booleans, objects, and even other Map instances.

//Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.

//Iteration: map provides built-in methods for easy iteration over its elements.

const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");

console.log(map.get(keyOne));
console.log(map.get(keyTwo));
console.log(map.get(keyThree));

console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);
console.log(map);

//iteration over map
for (let [key, value] of map) {
  console.log(`${key}---${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}
//********************** */

// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
console.log(map1.size);

console.log(map1.delete("b"));
console.log(map1.size);

// ------------------------------------------
// Write a function called countCharacters that takes a string as input and returns a Map that contains each character in the string as a key and the count of occurrences of that character as the value.

// Something like this 👇
// const text = "hello";

// const characterCountMap = countCharacters(text);
// console.log(characterCountMap);

// output
// Map(4) {
//     'h' => 1,
//     'e' => 1,
//     'l' => 2,
//     'o' => 1
//   }

function countCharacters(str) {
  const characterMap = new Map();

  for (const char of str) {
    const count = characterMap.get(char) || 0;
    characterMap.set(char, count + 1);
  }

  return characterMap;
}

const text = "hello";
const charMap = countCharacters(text);
console.log(charMap);
