var express = require("express");
var router = express.Router();
const Task = require("../public/modules/task")

let tasks = [];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express Todo",
    tasks: tasks
  });
});

router.post("/addTask", function(req, res) {
  const task = new Task(req.body.taskName);
  tasks.push(task);
  res.redirect("/");
});

router.post("/moveTaskCompleted", function(req, res) {
  const task = tasks[req.body.check];
  task.complete();
  res.redirect("/");
});

router.post("/moveTaskPending", function(req, res) {
  const task = tasks[req.body.check];
  task.revert();
  res.redirect("/");
});

router.post("/removePendingTask", function(req, res) {
  const task = tasks[req.body.remove];
  tasks.splice(task, 1);
  res.redirect("/");
});

router.post("/removeCompletedTask", function(req, res) {
  const task = tasks[req.body.remove];
  tasks.splice(task, 1);
  res.redirect("/");
});

module.exports = router;
