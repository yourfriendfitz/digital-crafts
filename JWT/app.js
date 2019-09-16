const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

users = [{ username: "fitz", password: "password" }];

app.post("/login", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const persistedUser = users.find(
    u => u.username == username && u.password == password
  );

  if (persistedUser) {
    const token = jwt.sign({ username }, "privateKey");
    console.log(token);
    res.json({ token });
  } else {
    res.send("invalid");
  }
});

app.listen(1000, console.log("running on 1000"));
