const log = console.log;

taskInput = document.getElementById("enter-task-input");

addTaskButton = document.getElementById("add-task");

pendingTaskContainer = document.getElementById("pending");

compTaskContainer = document.getElementById("completed");

let taskToAdd;

const addPendingTask = (taskName, taskId) => {
  const task = document.createElement("div");
  task.outerHTML = `<div class="task">
    <input type="checkbox" name="moveToComp" id="${taskId}" />
    <h2>${taskName}</h2>
    <button class="remove" onclick="removeTask(this)">Remove</button>
  </div>`;
  pendingTaskContainer.appendChild(task)
};


taskInput.addEventListener("change", (e) => {
    taskToAdd = e.srcElement.value
})

addTaskButton.addEventListener("click", () =>)