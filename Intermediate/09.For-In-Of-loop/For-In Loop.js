let person = {
  name: "HArvey",
  age: 40,
  gender: "Male",
};

for (let keys in person) {
  console.log(keys, person[keys]);
}

let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}
