// Abstract class (providing a blueprint for subclasses)

// ---------- Define
// In this example, we have an abstract class Animal that contains an abstract method makeSound(). The makeSound() method is declared in the Animal class but doesn't provide an implementation. It's meant to be implemented by subclasses like Dog and Cat.

// The Dog and Cat classes are concrete subclasses that inherit from the Animal class. They implement the abstract method makeSound() with their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement, while hiding the internal details of how each animal makes its sound. This simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifics of each animal's sound implementation.

class Animal {
  constructor(name) {
    this.name = name;
  }

  // Abstract method (to be implemented by subclasses)
  makeSound() {
    throw new Error('Method "makeSound must be implemented');
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

// Concrete subclass
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Meow";
  }
}

const dog = new Dog("buddy");
console.log(dog);
console.log(dog.makeSound());

const cat = new Cat("Feo");
console.log(cat);
console.log(cat.makeSound());
