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

module.exports = Task;
