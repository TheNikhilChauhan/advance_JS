//Class modifiers: are known as access modifiers or visibility modifiers, are keywords in OOP languages that define the visibility or accessibility of class members(fields, methods and nested classes) from other parts of the program. They control the level of encapsulation and help enforce encapsulation principles by restricting direct access to certain class members.

// JS does not have traditional access modifiers like java. However, you can achieve similar effects using different convention and techniques. Class modifiers are used in the context of classes and objects.

function MyClass(publicField, privateField, protectedField) {
  //public
  this.publicField = publicField;

  //private (using "_")
  const _privateField = privateField;

  //protected
  const _protectedField = protectedField;

  //public method
  this.publicMethod = function () {
    return `Public field: ${this.publicField}`;
  };

  //private method
  function _privateMethod() {
    return `Private field: ${_privateField}`;
  }

  //protected method
  function _protectedMethod() {
    return `Protected field: ${_protectedField}`;
  }

  //method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod();
  };
}

const myObj = new MyClass("public data", "private data", "protected data");
console.log(myObj);
console.log(myObj.publicMethod());
console.log(myObj.accessProtectedMethod());

// These lines will cause errors since they access private and protected members directly.
// console.log(myObject.privateField); // Error: privateField is not defined
// console.log(myObject._privateMethod()); // Error: _privateMethod is not a function
// console.log(myObject.protectedField); // Error: protectedField is not defined
// console.log(myObject._protectedMethod()); // Error: _protectedMethod is not a function
