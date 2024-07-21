const taskList = document.getElementById('tasks-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Function to get tasks from local storage
function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Function to set tasks in local storage
function setTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to display tasks
function displayTasks() {
  const tasks = getTasks();
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = !task.completed;
      setTasks(tasks);
      displayTasks();
    });
    listItem.appendChild(checkbox);
    listItem.textContent = task.text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      const newTasks = tasks.filter((t) => t !== task);
      setTasks(newTasks);
      displayTasks();
    });
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

displayTasks(); // Display tasks on initial load

addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const tasks = getTasks();
    tasks.push({ text: taskText, completed: false });
    setTasks(tasks);
    displayTasks();
    newTaskInput.value = '';
  }
});
