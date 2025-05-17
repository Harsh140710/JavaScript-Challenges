/**
 * Write your challenge solution here
 */
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

let total = 0;
let completed = 0;

// Keep tasks in memory if needed
let tasks = [];

addBtn.addEventListener('click', function () {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Remove existing empty-list message
  let removeMsg = document.querySelector(".empty-list");
  if (removeMsg) {
    removeMsg.remove();
  }

  // Create task object
  let newTask = {
    id: Date.now(),
    taskname: taskText,
    completed: false,
  };

  // Push task into global array
  tasks.push(newTask);
  total++;
  taskInput.value = "";

  // Create list item
  const li = document.createElement('li');
  li.className = "task-item";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";

  // Create checkbox
  let completedCheckBox = document.createElement('input');
  completedCheckBox.type = "checkbox";
  completedCheckBox.className = "complete-checkbox";

  //increase completed tasks
  completedCheckBox.addEventListener('change', () => {
    if (completedCheckBox.checked) {
      newTask.completed = true;
      completed++;
      li.style.textDecoration = "line-through";
    } else {
      newTask.completed = false;
      completed--;
      li.style.textDecoration = "none";
    }
    countTotalTask();
  });

  // Create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.className = "delete-button";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', () => {
    li.remove();
    if (newTask.completed) {
      completed--;
    }
    total--;
    countTotalTask();
  });

  // append elements
  li.appendChild(completedCheckBox);
  li.appendChild(document.createTextNode(taskText));
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

   // Update task count
  countTotalTask();
});

function countTotalTask() {
  let totalTask = document.getElementById('totalTasks');
  totalTask.textContent = "Total tasks: " + total;

  let completedTask = document.getElementById('completedTasks');
  completedTask.textContent = "Completed: " + completed;
}
