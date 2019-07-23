const log = console.log;

let movieUrl = "http://www.omdbapi.com/?s=batman&apikey=26332775";

fetch(movieUrl).then(response => {
  log(response);
  log(this);
  response.json().then(data => {
    log(data);
  });
});
