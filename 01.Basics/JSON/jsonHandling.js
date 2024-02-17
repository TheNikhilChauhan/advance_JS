// json
const person = {
  name: "Will Graham",
  age: 27,
  email: "will@gmail.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    idk: true,
  },
};

//JSON.stringify()

const jsonString = JSON.stringify(person);
console.log(jsonString);

//JSON.parse()
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
