// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const nik = Object.create(person);
nik.firstName = "Nikhil";
nik.lastName = "Chauhan";
nik.greet();

let john = Object.create(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
});

console.log(john);
john.greet();
