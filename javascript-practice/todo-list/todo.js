const log = console.log;

const taskInput = document.getElementById("enter-task-input");

const addTaskButton = document.getElementById("add-task");

const removeTaskButtons = document.getElementsByClassName("remove");

const pendingTaskContainer = document.getElementById("pending");

const compTaskContainer = document.getElementById("completed");

// lorem = [
//   ...new Set(
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//       .toLowerCase()
//       .replace("/[.,]/", "")
//       .split(" ")
//   )
// ];

let taskToAdd;
// let loremIndex = 0;
let checkboxVisible = false;

const addPendingTask = (taskName) => {
  const task = document.createElement("div");
  pendingTaskContainer.appendChild(task);
  task.outerHTML = `<div class="task">
    <input type="checkbox" onclick="moveToComp(this)">
    <h5>${taskName}</h5>
    <button class="remove" onclick="removeTask(this)">Remove</button>
  </div>`;
};

const removeTask = e => {
  taskToRemove = e.parentNode
  taskToRemove.parentNode.removeChild(taskToRemove);
};

const addCompTask = (taskName) => {
  const task = document.createElement("div");
  compTaskContainer.appendChild(task);
  task.outerHTML = `<div class="task">
      <input type="checkbox" onclick="moveToPend(this)" checked>
      <h5>${taskName}</h5>
      <button class="remove" onclick="removeTask(this)">Remove</button>
    </div>`;
};

const moveToComp = e => {
  // const compTaskId = lorem[loremIndex];
  const compTaskName = e.parentNode.childNodes[3].innerHTML;
  removeTask(e);
  addCompTask(compTaskName);
};

const moveToPend = e => {
  // const compTaskId = lorem[loremIndex];
  const compTaskName = e.parentNode.childNodes[3].innerHTML;
  removeTask(e);
  addPendingTask(compTaskName);
};

taskInput.addEventListener("change", e => {
  taskToAdd = e.srcElement.value;
});

addTaskButton.addEventListener("click", () => {
  // const pendTaskId = lorem[loremIndex];
  addPendingTask(taskToAdd);
  // loremIndex++;
});
