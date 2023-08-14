// Function to get tasks from local storage
async function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }
  
  // Function to save tasks to local storage
  async function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Function to add a task to the list
  async function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value.trim();
  
    if (task === '') {
      alert('Please enter a task.');
      return;
    }
  
    const tasks = await getTasks();
    tasks.push({ text: task, done: false });
    await saveTasks(tasks);
  
    taskInput.value = '';
    displayTasks();
  }
  
  // Function to remove a task from the list
  async function deleteTask(index) {
    const tasks = await getTasks();
    tasks.splice(index, 1);
    await saveTasks(tasks);
    displayTasks();
  }
  
  // Function to toggle the done status of a task
  async function toggleDone(index) {
    const tasks = await getTasks();
    tasks[index].done = !tasks[index].done;
    await saveTasks(tasks);
    displayTasks();
  }
  
  // Function to display tasks on the page
  async function displayTasks() {
    const tasks = await getTasks();
    const taskList = document.getElementById('taskList');
  
    taskList.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => toggleDone(index));
  
      const textSpan = document.createElement('span');
      textSpan.innerText = task.text;
  
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(index));
  
      li.appendChild(checkbox);
      li.appendChild(textSpan);
      li.appendChild(deleteButton);
  
      taskList.appendChild(li);
    });
  }
  
  // Display existing tasks on page load
  displayTasks();
  