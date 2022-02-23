const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/info";
const key = {
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f3c10a5359msh740a43b7eb027f4p14accbjsncc6ed355b778",
  },
};

async function callHeartstone() {
  const response = await fetch(url, key);
  const results = await response.json();
  console.log(results);
}

callHeartstone();
