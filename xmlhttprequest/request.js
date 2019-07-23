const requestWithinRequest = () => {
  // you can change the parameters passed to firstUrl and secondUrl to
  // eliminate hard coding the urls
  let firstUrl = "http://www.omdbapi.com/?s=batman&apikey=26332775";
  let req = new XMLHttpRequest();
  req.open("GET", firstUrl);
  req.send();
  // event listener for the first request load
  req.addEventListener("load", () => {
    let firstResponse = JSON.parse(req.responseText);
    console.log(firstResponse);
    // grabbing the search array from the first request
    // .Search will need to be changed to the API specific key youre
    // trying to access
    firstResponse.Search.forEach(obj => {
      let secondUrl = `http://www.omdbapi.com/?i=${obj.imdbID}&apikey=26332775`;
      let req = new XMLHttpRequest();
      req.open("GET", secondUrl);
      req.send();
      // event listener for the second request load
      req.addEventListener("load", () => {
        let secondResponse = JSON.parse(req.responseText);
        console.log(secondResponse);
      });
    });
  });
};
