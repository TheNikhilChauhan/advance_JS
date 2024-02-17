// terniary operator in JS is a concise way of writing conditional expressions. It is the only Js operator that takes three operands: a condition followed by a question mark(?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the conditin is false.

//condition ? ifTrue : ifFalse;

let password = 8;

function passwordChecker(ps) {
  return ps === 8
    ? `Strong Password`
    : `Password should be greater than equal to 8 characters`;
}

console.log(passwordChecker(password));

const age = 25;

const isAdult = age >= 18 ? "Adult" : "Not an adult";
console.log(isAdult);
