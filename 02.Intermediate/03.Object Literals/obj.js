// Enhanced object literals, introduced in ECMAScript 6, are a set of enhancements to the syntax for defining objects in JS. These enhancements make it more convenient and concise to define object properties and methods.

function getPerson(name, age, height) {
  return {
    name,
    age,
    height,
  };
}

console.log(getPerson("Harvey", 38, 168));
