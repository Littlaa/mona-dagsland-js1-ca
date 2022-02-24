const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks";
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
    const cards = results;

    setTimeout(function () {
      resultsContainer.innerHTML = "";

      for (let i = 0; i < cards.length; i++) {
        resultsContainer.innerHTML += `<div class="result">
                                        <p>Card ID: ${cards[i].cardBackId}</p>
                                        <p>Name: ${cards[i].name}</p>
                                        <p>Category: ${cards[i].sortCategory}</p>
                                        </div>`;
      }
    }, 1000);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("Something went wrong while calling the API");
  }
}

callHeartstone();

//<img src=${cards[i].img} tried this in the inner.html but the images wouldn't show because of access denied.
