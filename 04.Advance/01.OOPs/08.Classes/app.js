// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration
// class Person {
//   constructor(firstName, lastName, age) {
//     //instance members
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.printUserInfo = function () {
//       return `Name is ${this.firstName} ${this.lastName} and age is ${this.age}`;
//     };
//   }

//   //prototype members
//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
// }

// const nik = new Person("Nikhil", "Chauhan", 27);
// console.log(nik);
// console.log(nik.printUserInfo());
// console.log(nik.greeting());

// //Inheritance
// class Programmer extends Person {
//   constructor(firstName, lastName, age, pl, experience) {
//     super(firstName, lastName, age);
//     //this calls the parent class constructor
//     this.pl = pl;
//     this.experience = experience;
//   }
// }

// const harvey = new Programmer("Harvey", "Specter", 40, "JavaScript", 10);
// console.log(harvey);
// console.log(harvey.greeting());

//*************************** */
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `Hello Mr. ${this.name}`;
  }
}

const thor = new Hero("Thor", 143);
console.log(thor);
console.log(thor.greet());

class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}

const yuno = new Mega("Yuno", 145, "Wind Syth");
console.log(yuno);
console.log(yuno.greet());
