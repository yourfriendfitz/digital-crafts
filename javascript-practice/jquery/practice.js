const log = console.log;

$(document).ready(() => {
  const taskInput = $("#taskInput");
  const addButton = $("#addTask");
  const taskList = $("#taskList");
  addButton.click(() => {
    const taskName = `<div class="task">${taskInput.val()}</div>`;
    taskList.append(taskName);
  });
});
