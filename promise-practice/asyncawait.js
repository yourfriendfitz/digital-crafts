const log = console.log;

let movieUrl = "http://www.omdbapi.com/?s=batman&apikey=26332775";

const asyncFetch = async () => {
    let response = await fetch(movieUrl)
    let json = await response.json()
    log(response)
    log(json)
}

asyncFetch()