const detailContainer = document.querySelector(".card_details");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const cardId = parameter.get("cardId");

const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/" + cardId;
const key = {
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f3c10a5359msh740a43b7eb027f4p14accbjsncc6ed355b778",
  },
};

console.log(url, key);

async function callDetails() {
  try {
    const response = await fetch(url, key);
    const details = await response.json();
    const results = details.shift();

    console.log(details);

    setTimeout(function () {
      detailContainer.innerHTML = "";

      detailContainer.innerHTML += `<h1>${results.name}</h1>
                                    <div class="result">
                                    <p>Type: ${results.type}</p>
                                    <p>Text: ${results.text}</p>
                                    <p>Player class: ${results.playerClass}</p>
                                    </div>`;
    }, 1000);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError("Something went wrong while calling the API");
  }
}

callDetails();

//Source used:
//Have used the lessons to finished this CA.
//https://www.codegrepper.com/code-examples/javascript/get+first+item+in+array+javascript
