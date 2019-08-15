const express = require("express");
const app = express();
const models = require("./models");

app.use(express.urlencoded({ extended: false }));

app.post("/create-post", async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const isPublished = req.body.isPublished == "true" ? true : false;

  const post = models.Post.build({
    title: title,
    body: body,
    isPublished: isPublished
  });
  const response = await post.save();
  res.json(response);
});

app.listen(3000);
