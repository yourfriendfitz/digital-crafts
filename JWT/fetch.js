const webToken = async () => {
  const response = await fetch("http://localhost:1000/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: "fitz", password: "password" })
  });
  const json = await response.json();
  localStorage.setItem("JWT", json.token);
};
