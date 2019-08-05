var express = require("express");
var router = express.Router();
var fs = require("fs");

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

router.post("/addTask", function(req, res) {
  const task = new Task(req.body.taskName);
  pendingTasks.push(task);
  res.redirect("/");
});

router.post("/moveTaskCompleted", function(req, res) {
  const task = req.body.check;
  completedTasks.push(pendingTasks[task]);
  pendingTasks.splice(task, 1);
  res.redirect("/");
});

router.post("/moveTaskPending", function(req, res) {
  const task = req.body.check;
  pendingTasks.push(completedTasks[task]);
  completedTasks.splice(task, 1);
  res.redirect("/");
});

router.post("/removePendingTask", function(req, res) {
  const task = pendingTasks[req.body.remove];
  pendingTasks.splice(pendingTasks[task], 1);
  res.redirect("/");
});

router.post("/removeCompletedTask", function(req, res) {
  const task = completedTasks[req.body.remove];
  completedTasks.splice(completedTasks[task], 1);
  res.redirect("/");
});

module.exports = router;
