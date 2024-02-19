// const promiseObj = fetch("text.txt");
// console.log(promiseObj);

// promiseObj
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const result = document.querySelector(".results");

async function readData() {
  try {
    const response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();
    result.textContent = data;
  } catch (error) {
    console.log(error);
  }
}

readData();
