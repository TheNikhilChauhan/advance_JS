// every and some are two built-in array methods in JS that allows you to check the element of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of the array.

//Every() method tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if any element fails the condition.

// some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element, and false if no element passes the condition.

const peoples = ["King", "Saitama", "Genos"];

const res = peoples.every((person) => person.length >= 4);
const res2 = peoples.some((person) => person.length > 5);

console.log(res);
console.log(res2);

//////////////////////////////////

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

const songRes = songs.every((song) => song.duration > 3);
const songRes2 = songs.some((song) => song.duration > 3);

console.log(songRes);
console.log(songRes2);
