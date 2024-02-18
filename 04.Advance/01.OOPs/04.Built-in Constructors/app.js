// Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you to create objects of various data types. These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

//Number Constructors
const num1 = new Number(42);
console.log(typeof num1, num1, num1.valueOf());
const num2 = 7;
console.log(typeof num2);

//string constructor
const str1 = new String("Hello");
console.log(typeof str1, str1.valueOf());

const str2 = "World";
console.log(typeof str2);

//boolean Constructor
const bool1 = new Boolean(true);
console.log(typeof bool1, bool1.valueOf());

const book2 = false;
console.log(typeof book2);

//array constructor
const arr1 = new Array(1, 2, 3);
console.log(typeof arr1, arr1.valueOf());

const arr2 = [4, 5, 6];
console.log(Array.isArray(arr2));

//Object constructor
const obj1 = new Object();
obj1.name = "John";
obj1.age = "27";
console.log(obj1);

const obj2 = { city: "Tokyo" };
console.log(obj2);
