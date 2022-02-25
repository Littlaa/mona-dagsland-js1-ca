const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
const key = {
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f3c10a5359msh740a43b7eb027f4p14accbjsncc6ed355b778",
  },
};

const resultsContainer = document.querySelector(".results");

async function callHeartstone() {
  try {
    const response = await fetch(url, key);
    const results = await response.json();
    const cards = results.Classic;

    setTimeout(function () {
      resultsContainer.innerHTML = "";

      for (let i = 0; i < cards.length; i++) {
        if (i === 12) {
          break;
        }

        resultsContainer.innerHTML += `<a href="details.html?cardId=${cards[i].cardId}" class="result">
                                        <p>Name: ${cards[i].name}</p>
                                        <p>Card set: ${cards[i].cardSet}</p>
                                        <p>Type: ${cards[i].type}</p>
                                        </a>`;
      }
    }, 1000);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("Something went wrong while calling the API");
  }
}

callHeartstone();

//I had a very long API call so I took it down to 12 because of loading. Hope that was OK.
//https://rapidapi.com/omgvamp/api/hearthstone/
