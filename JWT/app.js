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
  if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "privateKey");
    const username = decoded.username;
    const authUser = users.find(user => user.username === username);
    authUser ? next() : res.json({ error: "unauthorized" });
    next();
  } else {
    res.json({ error: "headers missing" });
  }
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

app.get("/profile", authenticate, (req, res) => {
  res.json({ message: "Welcome, Authorized User", ...profile });
});

app.listen(1000, console.log("running on 1000"));
