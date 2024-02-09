// we pass in anonymous callback function,
//this function gets called one time for every element in the array whatever is inside the function that logic happens

const colors = ["red", "blue", "green", "orange"];

function iterateColors(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

iterateColors(colors);

const words = ["chai", "coffee", "samosa", "idli", "dosa"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);
