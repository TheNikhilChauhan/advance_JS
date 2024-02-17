const person = {
  name: "Mike Ross",
  age: 40,
  country: "USA",
};

// function printPerson(person) {
//   console.log(`Name: ${person.name}`);
//   console.log(`Age: ${person.age}`);
//   console.log(`Country: ${person.country}`);
// }

//destructuring
function printPerson({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPerson(person);

let options = {
  title: "My Menu",
  items: ["item1", "item2"],
};

function showMenu({
  title,
  width: w = 100,
  height: h = 200,
  items: [item1, item2],
}) {
  console.log(`Title: ${title} ${w} ${h}`);
  console.log(`item1`);
  console.log(`item2`);
}

showMenu(options);
