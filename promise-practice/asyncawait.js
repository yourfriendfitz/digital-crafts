const log = console.log;

let movieUrl = "http://www.omdbapi.com/?s=batman&apikey=26332775";

const asyncFetch = async () => {
  let response = await fetch(movieUrl);
  let json = await response.json();
  log(response);
  log(json);
};

asyncFetch();

const asyncFetchPost = async () => {
  let post = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: "Fitz",
      job: "Software Developer"
    })
  });
  let response = await post.json();
  await log(post)
  log(response);
};

asyncFetchPost();
