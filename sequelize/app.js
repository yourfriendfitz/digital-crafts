const express = require("express");
const app = express();
const models = require("./models");

app.use(express.urlencoded({ extended: false }));

app.get("/post/:postId", async (req, res) => {
  const postId = parseInt(req.params.postId);
  try {
    const post = await models.Post.findOne({
      include: [
        {
          model: models.Comment,
          as: "comments"
        }
      ],
      where: {
        id: postId
      }
    });
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

app.get("/comments/:commentId", async (req, res) => {
  const commentId = req.params.commentId;
  const comment = await models.Comment.findOne({
    include: [
      {
        model: models.Post,
        as: "post"
      }
    ],
    where: {
      id: commentId
    }
  });
  res.json(comment);
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
  try {
    const response = await post.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.post("/create-comment", async (req, res) => {
  const subject = req.body.subject;
  const body = req.body.body;
  const postId = parseInt(req.body.id);

  const comment = models.Comment.build({
    subject: subject,
    body: body,
    postId: postId
  });
  try {
    const response = await comment.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000);
