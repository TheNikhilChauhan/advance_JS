const result = document.querySelector(".result");

async function renderData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    result.textContent = data.firstName;
  } catch (error) {
    console.log(error);
  }
}

renderData();
