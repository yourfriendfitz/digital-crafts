const log = console.log;

const queryInput = document.getElementById("query");

const queryButton = document.getElementById("addWord");

const wordList = document.getElementById("wordList");

let url = "";
let jsonObj = {};

const createWord = jsonObject => {
  return `
    <div class="word">
    <h6>${jsonObject[0].meta.stems[0]}</h6>
    <p class="definition">${jsonObject[0].shortdef}</p>
    </div>
    `;
};

queryInput.addEventListener("change", () => {
  const query = queryInput.value;
  url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=a7aaf907-e0d5-4865-8ec5-2145a2c443d5`;
});

queryButton.addEventListener("click", () => {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      console.log(jsonData);
      jsonObj = jsonData;
      const newWord = createWord(jsonObj);
      wordList.insertAdjacentHTML("afterbegin", newWord);
    })
    .catch(function(err) {
      console.log("Opps, Something went wrong!", err);
    });
});
