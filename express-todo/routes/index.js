var express = require("express");
var router = express.Router();
var fs = require("fs");

let tasks = [];

class Task {
  constructor(name) {
    this.taskName = name;
    this.dateCreated = new Date(Date.now()).toLocaleTimeString();
    this.dateCompleted = "In Progress";
    this.isCompleted = false;
  }
  complete() {
    this.dateCompleted = new Date(Date.now()).toLocaleTimeString();
    this.isCompleted = true;
  }
  revert() {
    this.dateCompleted = "In Progress";
    this.isCompleted = false;
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
  tasks.push(task);
  res.redirect("/");
});

router.post("/moveTaskCompleted", function(req, res) {
  const task = req.body.check;
  tasks.splice(task, 1);
  task.complete();
  tasks.push(task);
  res.redirect("/");
});

router.post("/moveTaskPending", function(req, res) {
  const task = req.body.check;
  tasks.splice(task, 1);
  task.revert();
  tasks.push(task);
  task.res.redirect("/");
});

router.post("/removePendingTask", function(req, res) {
  const task = req.body.remove;
  tasks.splice(task, 1);
  res.redirect("/");
});

router.post("/removeCompletedTask", function(req, res) {
  const task = req.body.remove;
  tasks.splice(task, 1);
  res.redirect("/");
});

module.exports = router;
