const express = require("express");
const app = express();
const models = require("./models");

app.use(express.urlencoded({ extended: false }));

app.get("/post/:postId", (req, res) => {
  const post = req.params.postId; // need to actually query the db for the post
  res.render("post", { post: post });
});

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

app.post("/create-comment", async (req, res) => {
  const subject = req.body.subject;
  const body = req.body.body;
  const postId = parseInt(req.body.postId);

  const comment = models.Comment.build({
    subject: subject,
    body: body,
    postId: postId
  });
  const response = await comment.save();
  res.json(response);
});

app.listen(3000);
