const webToken = async () => {
  const response = await fetch(
    "https://boiling-escarpment-07603.herokuapp.com/login",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: "fitz", password: "password" })
    }
  );
  const json = await response.json();
  localStorage.setItem("JWT", json.token);
};

const sendWebToken = async token => {
  const response = await fetch(
    "https://boiling-escarpment-07603.herokuapp.com/profile",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );
  const json = await response.json();
  return json;
};

export { webToken, sendWebToken };
