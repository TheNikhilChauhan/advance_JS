// //a factory function is a type of funtion that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

// //normal object
// //if we want to add multiple persons then we have to write it again and again so instead of doing this JS introduced factory function that is constructor.

// // let person = {
// //   firstName: "Nikhil",
// //   lastName: "Chauhan",
// //   fullName: function () {
// //     console.log(`Hellow my name is ${this.firstName} ${this.lastName}`);
// //   },
// // };

// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     pl: pl,
//     fullName: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName} and I love ${this.pl}`
//       );
//     },
//   };
// }

// const harvey = createPerson("Harvey", "Specter", "JavaScript");
// harvey.fullName();

function createVehicle(type, brand, model, year) {
  return {
    type: type,
    brand: brand,
    model: model,
    year: year,
  };
}

const vehicle1 = createVehicle("Bike", "Suzuki", "Dual-Disc", 2017);
console.log(vehicle1);
