const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = [{ username: "fitz", password: "password" }];
const profile = { name: "fitz", age: 25 };

const authenticate = (req, res, next) => {
  const headers = req.headers["Authorization"];
};

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

app.get("/profile", (req, res) => {
  res.json(profile);
});

app.listen(1000, console.log("running on 1000"));
