const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.use(urlEncoded({ extended: false }));

app.post("/login", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const persistedUser = users.find(
    u => u.username == username && u.password == password
  );

  if (persistedUser) {
    const token = jwt.sign({ username }, "privateKey");
    console.log(token);
  } else {
    res.send("invalid");
  }
});

app.listen(1000, console.log("running on 1000"));
