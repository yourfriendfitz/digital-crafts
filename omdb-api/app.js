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
        let newMovie = createMovieElement(movie, movieJsonObj);
        movieList.insertAdjacentHTML("afterbegin", newMovie);
      })
      .catch(function(err) {
        console.log("Opps, Something went wrong!", err);
      });
  });
};

const createMovieElement = (parentObj, childObj) => {
  const newMovie = `
        <div class="movie">
        <h6 class="movieTitle">${parentObj.Title}</h6>
        <img src="${parentObj.Poster}" alt="${parentObj.Title} poster">
        <button class="showButton" id="show${
          parentObj.imdbID
        }" onclick="showInfo('${parentObj.imdbID}')">Show Info</button>
        <ul class="movieInfo" id="${parentObj.imdbID}">
        <li>Released: ${childObj.Released}</li>
        <li>Director: ${childObj.Director}</li>
        <li>MPAA Rating: ${childObj.Rated}</li>
        <li>Genre: ${childObj.Genre}</li>
        <li>Starring: ${childObj.Actors}</li>
        <li>Runtime: ${childObj.Runtime}</li>
        <li><a href="https://www.imdb.com/title/${
          parentObj.imdbID
        }/"><img class="imdbIcon" src="imdb.png"></a></li>
        </ul>
        </div>
        `;
  return newMovie;
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
