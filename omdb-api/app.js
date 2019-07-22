const log = console.log;

const queryInput = document.getElementById("query");

const queryButton = document.getElementById("addWord");

const movieList = document.getElementById("movieList");

let url = "";
let movieUrl = "";
let jsonObj = {};
let movieJsonObj = {};
let newMovie = ``;

const createMovie = jsonObject => {
  jsonObject.Search.forEach(movie => {
    movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=26332775`;
    fetch(movieUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        movieJsonObj = jsonData;
        newMovie = `
        <div class="movie">
        <h6 class="movieTitle">${movie.Title}</h6>
        <img src="${movie.Poster}" alt="${movie.Title} poster">
        <button class="showButton" id="show${
          movie.imdbID
        }" onclick="showInfo('${movie.imdbID}')">Show Info</button>
        <ul class="movieInfo" id="${movie.imdbID}">
        <li>Released: ${movieJsonObj.Released}</li>
        <li>Director: ${movieJsonObj.Director}</li>
        <li>MPAA Rating: ${movieJsonObj.Rated}</li>
        <li>Genre: ${movieJsonObj.Genre}</li>
        <li>Starring: ${movieJsonObj.Actors}</li>
        <li>Runtime: ${movieJsonObj.Runtime}</li>
        <li><a href="https://www.imdb.com/title/${
          movie.imdbID
        }/"><img class="imdbIcon" src="imdb.png"></a></li>
        </ul>
        </div>
        `;
        movieList.insertAdjacentHTML("afterbegin", newMovie);
      })
      .catch(function(err) {
        console.log("Opps, Something went wrong!", err);
      });
  });
};

const showInfo = elementId => {
  const element = document.getElementById(elementId);
  const elementButton = document.getElementById(`show${elementId}`);
  if (element.style.display === "") {
    element.style.display = "block";
    elementButton.innerHTML = "Hide Info";
  } else {
    element.style.display = "";
    elementButton.innerHTML = "Show Info";
  }
};

queryInput.addEventListener("change", () => {
  const query = queryInput.value;
  url = `http://www.omdbapi.com/?s=${query}&apikey=26332775`;
});

queryButton.addEventListener("click", () => {
  movieList.innerHTML = "";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      jsonObj = jsonData;
      createMovie(jsonObj);
    })
    .catch(function(err) {
      console.log("Opps, Something went wrong!", err);
    });
});
