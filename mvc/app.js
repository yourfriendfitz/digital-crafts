const express = require('express')

const app = express();

const indexRouter = require("./index");

app.get("/posts", indexRouter);

app.listen(3000, () => {
  console.log("listening: 3000");
});
