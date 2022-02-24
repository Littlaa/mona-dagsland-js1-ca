const detailContainer = document.querySelector(".card_details");

const querystring = document.location.search;
const parameter = new URLSearchParams(querystring);
const cardId = parameter.get("cardBackId");

const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/" + cardId;
const key = {
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f3c10a5359msh740a43b7eb027f4p14accbjsncc6ed355b778",
  },
};

async function callDetails() {
  try {
    const response = await fetch(url, key);
    const details = await response.json();

    setTimeout(function () {
      detailContainer.innerHTML = "";

      detailContainer.innerHTML += `<h1>${details.name}</h1>
                                    <div>
                                    <p>Description: ${details.description}</p>
                                    <p>How to get: ${details.howToGet}</p>
                                    <p>Source: ${details.source}</p>
                                    </div>`;
    }, 1000);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError("Something went wrong while calling the API");
  }
}

callDetails();
