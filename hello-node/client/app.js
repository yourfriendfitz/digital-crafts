const init = async () => {
    const response = await fetch("http://localhost:3000/movies");
    const json = await response.json()
    document.querySelector(".container").innerHTML = `
    <div>${JSON.stringify(json)}</div>
    `

}