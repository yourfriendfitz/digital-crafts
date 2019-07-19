$(document).ready(() => {
  const log = console.log;

  const taskInput = $("#enter-task-input");

  const addTaskButton = $("#add-task");

  const removeTaskButtons = $(".remove");

  const pendingTaskContainer = $("#pending");

  const compTaskContainer = $("#completed");

  let taskToAdd;

  const addPendingTask = taskName => {
    const task = `<div class="task">
      <input type="checkbox" onclick="moveToComp(this)">
      <h5>${taskName}</h5>
      <button class="remove" onclick="removeTask(this)">Remove</button>
    </div>`;
    pendingTaskContainer.append(task);
  };

  const showTaskPreview = taskName => {
    const task = `<div class="task" id="preview" style="opacity: 0.5">
      <input type="checkbox">
      <h5>${taskName}</h5>
      <button class="remove" onclick="removeTask(this)">Remove</button>
    </div>`;
    pendingTaskContainer.append(task);
  };

  const removeTask = e => {
    taskToRemove = e.parentNode;
    taskToRemove.remove();
  };

  const addCompTask = taskName => {
    const task = `<div class="task">
        <input type="checkbox" onclick="moveToPend(this)" checked>
        <h5>${taskName}</h5>
        <button class="remove" onclick="removeTask(this)">Remove</button>
      </div>`;
    compTaskContainer.append(task);
  };

  const moveToComp = e => {
    const compTaskName = e.parentNode.childNodes[3].innerHTML;
    removeTask(e);
    addCompTask(compTaskName);
  };

  const moveToPend = e => {
    const compTaskName = e.parentNode.childNodes[3].innerHTML;
    removeTask(e);
    addPendingTask(compTaskName);
  };

  const removePreview = () => {
    if ($("#preview")) {
      $("#preview").remove();
    }
  };

  taskInput.on("input", () => {
    removePreview();
    const taskToPreview = taskInput.val();
    showTaskPreview(taskToPreview);
  });

  taskInput.on("change", () => {
    taskToAdd = taskInput.val();
  });

  addTaskButton.click(() => {
    removePreview();
    addPendingTask(taskToAdd);
  });
});
