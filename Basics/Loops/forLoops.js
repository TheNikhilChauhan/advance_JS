//for (initial exp; condition; increment exp;){}
let arr = [];
for (let i = 1; i <= 4; i++) {
  arr.push(i);
}

console.log(arr);

// **************************

// nested loop
let matrix = [];
const row = 3;
const col = 4;

for (let i = 0; i < row; i++) {
  matrix[i] = [];
  for (let j = 0; j < col; j++) {
    matrix[i][j] = i * col + j + 1;
  }
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    process.stdout.write(matrix[i][j] + "\t"); // Output the value with a tab separator
  }
  console.log();
}
