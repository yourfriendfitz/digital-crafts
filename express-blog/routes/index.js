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
      const users = await db.any("SELECT * FROM users");
      const currentUser = users.find(user => {
        return (
          user.username === req.session.name &&
          user.password === req.session.password
        );
      });
      if (currentUser) {
        const posts = await getPosts(currentUser.uid);
        res.render("index", { uid: currentUser.uid, posts: posts });
      } else {
        res.redirect("/login");
      }
    }
  }

};

/* GET home page. */
router.get("/", authenticate, function(req, res, next) {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async function(req, res) {
  const users = await db.any("SELECT * FROM users");
  const currentUser = users.find(user => {
    return (
      user.username === req.body.name && user.password === req.body.password
    );
  });
  if (currentUser) {
    req.session.user = currentUser;
    const posts = await getPosts(currentUser.uid);
    res.render("index", { uid: currentUser.uid, posts: posts });
  } else {
    const posts = [];
    const user = new User(req.body.name, req.body.password);
    await db.none(
      `INSERT INTO users VALUES ('${user.id}', '${user.name}', '${
        user.password
      }');`
    );
    res.render("index", { uid: user.id, posts: posts });
  }
});

router.post("/addBlog", async (req, res) => {
  const post = new Post(req.body.title, req.body.body);
  await db.none(
    `INSERT INTO posts VALUES ('${req.body.uid}', '${JSON.stringify(post)}');`
  );
  const posts = await getPosts(req.body.uid);
  res.render("index", { uid: req.body.uid, posts: posts });
});

router.post("/updateBlog", async (req, res) => {
  const post = await getPost(req.body.idx);
  res.render("update", { uid: post[0].uid, posts: post, idx: post[0].postPK });
});

router.post("/updateBlog/:idx", async (req, res) => {
  const post = new Post(req.body.title, req.body.body);
  await updatePost(post, req.params.idx);
  const posts = await getPosts(req.body.uid);
  res.redirect("/");
});

router.post("/deleteBlog", async (req, res) => {
  await deletePost(req.body.idx);
  res.redirect("/");
});

module.exports = router;
