//Strings

let firstName = "Harvey ";
let lastName = "Specter";

// let fullName = firstName + " " + lastName;

// 1.concat
// let fullName = firstName.concat(lastName);
// console.log(fullName);

// 2. Append
// firstName += "the best closure";
// console.log(firstName);

// 3. length
// console.log(firstName.length);

// 4. cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// 5. slice: it includes the first index and excludes the last index
// console.log(firstName.slice(0, 3));

// 6. split and join
// console.log(firstName.split("").join("-"));
// split:convert string to array

// 7. includes
// console.log(firstName.includes("y"));

// let fullName = "   Mike Ross  ";
// // 8. trim: removes empty spaces
// console.log(fullName.trim());
// console.log(`${fullName.toUpperCase().trim()}`);

let money = "50";
//*****convert string to number*******

console.log(typeof parseInt(money));

//constructor number
console.log(typeof Number(money));

// ********number to string******

let numToString = 20;

console.log(typeof String(numToString));
console.log(typeof numToString.toString());
