console.clear();

async function fetchData() {
  const url = await fetch("https://swapi.py4e.com/api/people");
  const data = await url.json();
  console.log(data);
  console.log(data.results[3]);
  console.log("Eye color of R2-D2:", data.results[2].eye_color);
}

fetchData();
