var express = require("express");
var router = express.Router();

let pendingTasks = [];
let completedTasks = [];

class Task {
  constructor(name) {
    this.taskName = name;
  }
}

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express Todo",
    pendingTasks: pendingTasks,
    completedTasks: completedTasks
  });
});

router.post("/", function(req, res) {
  const task = new Task(req.body.taskName)
  pendingTasks.push(task)
  res.redirect("/")
});

module.exports = router;
