const student = {
  name: "Harvey",
  position: "First",
  rollNo: 20,
};

const { name } = student;
console.log(name);
// console.log(color1); // this won't work since we are already labeling our data

const { position: color } = student;
console.log(color);

//object destructuring and rest operator

let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };

console.log(a);
console.log(b);
console.log(rest);
