var app = require("express")();
var express = require("express");
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var session = require("express-session");
var uuid = require("uuid/v1");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

const authenticate = (req, res, next) => {
  if (req.session) {
    if (req.session.user) {
      next();
    } else {
      res.redirect("/");
    }
  }
};

const getUser = msg => {
  return chatroom.users.find(user => {
    return user.id === msg.uid;
  });
};

app.set("views", (__dirname, "views"));
app.set("view engine", "pug");

global.chatroom = {
  users: [],
  messages: []
};

class User {
  constructor(name) {
    this.name = name;
    this.id = uuid();
    this.messages = [];
  }
}

class Message {
  constructor(body) {
    this.body = body;
    this.id = uuid();
  }
  update(newBody) {
    this.body = newBody;
  }
}

app.get("/", function(req, res) {
  res.render("login");
});

app.get("/chat", authenticate, function(req, res, next) {
  res.render("index", {
    chatroom: chatroom,
    uid: req.session.user.id
  });
});

app.post("/login", function(req, res, next) {
  const user = new User(req.body.user);
  req.session.user = user;
  chatroom.users.push(user);
  res.redirect("/chat");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    const user = getUser(msg);
    user.messages.push(new Message(msg.message));
    chatroom.messages.push({
      user: user.name,
      message: msg.message,
      uid: user.id
    });
    console.log(user);
    console.log(user.messages);
    console.log(chatroom.users);
    console.log(chatroom.messages);
  });
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    const user = getUser(msg);
    msg.user = user.name;
    msg.uid = user.id;
    io.emit("chat message", msg);
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
