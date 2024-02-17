// it creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5, 6];

let double = numbers.map((num) => num * 2);
console.log(double);

let peoples = [
  { fName: "Harvey", lName: "Specter" },
  { fName: "Louis", lName: "Litt" },
  { fName: "Mike", lName: "Ross" },
  { fName: "Donna", lName: "Paulson" },
];

const results = peoples.map((person) => {
  return [person.fName, person.lName];
});
console.log(results);
