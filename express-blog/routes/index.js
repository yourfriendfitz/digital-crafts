var express = require("express");
var router = express.Router();
const Post = require("../public/javascripts/post");
const User = require("../public/javascripts/user");

const pgp = require("pg-promise")();
const connectionString =
  "postgres://mvpjsxoe:Ge9JZEuTbbDfYXo3sVgVBcu1iBHD0RNQ@hanno.db.elephantsql.com:5432/mvpjsxoe";
const db = pgp(connectionString);

const getPosts = async uid => {
  const posts = await db.any(`SELECT * FROM posts WHERE uid = '${uid}'`);
  const postsArray = posts.map(post => {
    return { post: post.post, postPK: post.idx };
  });
  return postsArray;
};

const getPost = async idx => {
  const posts = await db.any(`SELECT * FROM posts WHERE idx = '${idx}'`);
  const postsArray = posts.map(post => {
    return { post: post.post, postPK: post.idx, uid: post.uid };
  });
  return postsArray;
};

const updatePost = async (post, idx) => {
  await db.none(
    `UPDATE posts SET post = '${JSON.stringify(post)}' WHERE idx = '${idx}'`
  );
};

const deletePost = async idx => {
  await db.none(`DELETE FROM posts WHERE idx = '${idx}'`);
};

const authenticate = async (req, res, next) => {
  if (req.session) {
    if (req.session.user) {
      next();
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};

/* GET home page. */
router.get("/", (req, res) => {
  res.render("login");
});

router.get("/blog", authenticate, async function(req, res, next) {
  const user = req.session.user;
  console.log(user);
  const posts = await getPosts(user.id);
  console.log(posts)
  res.render("index", { uid: user.id, posts: posts });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async function(req, res, next) {
  req.session.user = new User(req.body.name, req.body.password);
  await db.none(
    `INSERT INTO users VALUES ('${req.session.user.id}', '${
      req.session.user.name
    }', '${req.session.user.password}')`
  );
  res.redirect("/blog");
});

router.post("/addBlog", async (req, res) => {
  const post = new Post(req.body.title, req.body.body);
  await db.none(
    `INSERT INTO posts VALUES ('${req.body.uid}', '${JSON.stringify(post)}');`
  );
  res.redirect("/blog");
});

router.post("/updateBlog", async (req, res) => {
  const post = await getPost(req.body.idx);
  res.render("update", { uid: post[0].uid, posts: post, idx: post[0].postPK });
});

router.post("/updateBlog/:idx", async (req, res) => {
  const post = new Post(req.body.title, req.body.body);
  await updatePost(post, req.params.idx);
  const posts = await getPosts(req.body.uid);
  res.redirect("/blog");
});

router.post("/deleteBlog", async (req, res) => {
  await deletePost(req.body.idx);
  res.redirect("/blog");
});

module.exports = router;
