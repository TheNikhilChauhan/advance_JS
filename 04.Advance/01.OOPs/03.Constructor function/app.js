// //Constructor functions in Javascript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behaviour.

// //Constructor function

// function CreatePeople(firstName, lastName, pl) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.pl = pl;
//   this.info = function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} and I love ${this.pl}`
//     );
//   };
// }

// // NEW KEYWORD:
// // 1. First create empty object {}
// // 2. Sets "this" to point to that object
// // 3. We can omit the return statement using "new" keyword

// const harvey = new CreatePeople("Harvey", "Specter", "Java");
// const mike = new CreatePeople("Mike", "Ross", "JavaScript");

// harvey.info();
// mike.info();

// //********************* */

// function Book(title, author, year) {
//   (this.title = title),
//     (this.author = author),
//     (this.year = year),
//     (this.getInfo = function () {
//       return `${this.title} by ${this.author} (${this.year})`;
//     });
// }

// // Creating instances using the constructor function
// const book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// console.log(book1.getInfo()); // The Alchemist by Paulo Coelho (1988)
// console.log(book2.getInfo()); // To Kill a Mockingbird by Harper Lee (1960)

// //************************** */

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.info = function () {
//     return `My name is ${this.name} and I'm ${this.age} years old ${this.gender}`;
//   };
// }

// const yuji = new Person("Yuji", 20, "Male");
// const gojo = new Person("Satoru", 28, "Male");
// console.log(yuji);
// console.log(yuji.info());
// console.log(gojo);
// console.log(gojo.info());

//************************ */

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    return `Starting the ${this.make} ${this.model}`;
  };
  this.stop = function () {
    return `Stopping the ${this.make} ${this.model}`;
  };
}

const car1 = new Car("Toyota", "Camry", 1996, "blue");
const car2 = new Car("Honda", "CR-V", 1995, "grey");

console.log(car1.start());
console.log(car2.stop());
