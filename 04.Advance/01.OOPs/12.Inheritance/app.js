//ES5

// function Animal(name) {
//   this.name = name;
// }

// //method shared among all animal instances
// Animal.prototype.makeSound = function () {
//   return "Unknown sound";
// };

// //subclass constructor inheriting from animal
// function Dog(name) {
//   Animal.call(this, name); // call the super class constructor
// }

// //set up prototype chain for Dog to inherite from Animal
// Dog.prototype = Object.create(Animal.prototype);

// //method specific to dog
// Dog.prototype.makeSound = function () {
//   return "Wooff";
// };

// //creating instances of the classes
// const genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal.name);
// console.log(genericAnimal.makeSound());

// const dog = new Dog("buddy");
// console.log(dog.name);
// console.log(dog.makeSound());

//***************** */
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Abstract method (to be implemented by subclasses)
  makeSound() {
    return `Unknown sound`;
  }
}

// Concrete subclass
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // Implementing the abstract method
  makeSound() {
    return "Woff";
  }
}

const dog = new Dog("buddy");
console.log(dog);
console.log(dog.makeSound());
