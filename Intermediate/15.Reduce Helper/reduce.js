// reduce method executes a reducer function for array element.
//reduce() returns a single value: the function's accumulated result.
// it does not execute the function for empty array elements.
// it does not change the original array.

//array.reducer(function(total, currentValue, currentIndex, arr), initialValue)

//****************** */

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((p, c) => {
  console.log(`Previous: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
}, 0);
//reduce will run for every item in the array
// 0 + 1 => 1
//   // 1 + 2 => 3
//   // 3 + 3 => 6
//   // 6 + 4 => 10
//   // 10 + 5 => 15

console.log(sum);
//***************** */

const people = [
  {
    name: "Harvey",
    age: 40,
  },
  {
    name: "Mike",
    age: 30,
  },
  {
    name: "Louis",
    age: 41,
  },
];

//Ternary operator
const oldestAge = people.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);

//******* */

const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  return frequencyMap;
}, {});

console.log(wordFrequency);

//**************** */

function calculateProduct(arr) {
  const product = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );

  return product;
}

const numbers = [2, 3, 4, 5];
const product = calculateProduct(numbers);
console.log(product); //120
