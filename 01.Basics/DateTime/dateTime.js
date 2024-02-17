// year, month, day, hours, minutes, seconds, miliseconds

// const currentDate = new Date(2024, 1, 26, 11, 30, 0);
// console.log(currentDate);

const date = new Date();

// const year = date.getFullYear();
// const month = date.getUTCMonth();
// const day = date.getDay();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const ms = date.getMilliseconds();
// const time = date.getTime();
// const dat = date.getDate();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`);
// console.log(`Day: ${day}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);
// console.log(`Miliseconds: ${ms}`);
// console.log(`Time: ${time}`);
// console.log(`Date: ${dat}`);

console.log(date.toDateString());
console.log(date.toLocaleTimeString());
