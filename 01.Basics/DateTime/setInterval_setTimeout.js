// //set interval
// setInterval(
//   () => console.log(`This function will be executed every 5 second.`),
//   5000
// );

// //set timeout
// setTimeout(
//   () =>
//     console.log(
//       `This function will be executed after 4 seconds and then stop executing`
//     ),
//   4000
// );

//stop the interval after 10 seconds
const intervalId = setInterval(function () {
  console.log(`This function is being executed at the interval`);
}, 2000);

setTimeout(function () {
  clearInterval(intervalId);
  console.log(`Interval stopped`);
}, 10000);
