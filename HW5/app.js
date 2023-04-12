const input = document.querySelector('input');
const addButton = document.querySelector('.addTask');
const notCompletedList = document.getElementById('notCompleted');
const completedList = document.getElementById('completed');

addButton.addEventListener('click', function() {
  const task = input.value.trim();
  if (task) {
    let tasks = JSON.parse(localStorage.getItem('unfinished') || '[]');
    tasks.push(task);
    localStorage.setItem('unfinished', JSON.stringify(tasks));
    input.value = '';
    showTasks();
  }
});

function showTasks(filter) {
  let tasks = JSON.parse(localStorage.getItem('unfinished') || '[]');
  if (filter) {
    tasks = tasks.filter(task => task.toLowerCase().includes(filter.toLowerCase()));
  }
  let html = '<h2>All Tasks</h2>';
  tasks.forEach((task, index) => {
    html += `
      <li>
        <input type="checkbox" onclick="completeTask(${index})">
        <label>${task}</label>
        <button class="bin" onclick="deleteTask(${index})"><img src="svg/bin.svg"/></button>
      </li>
    `;
  });
  notCompletedList.innerHTML = html;
  showCompletedTasks();
}

function showCompletedTasks() {
  let completedTasks = JSON.parse(localStorage.getItem('completed') || '[]');
  let html = '<h2>Completed Tasks</h2>';
  completedTasks.forEach((task, index) => {
    html += `
      <li>
        <input type="checkbox" checked disabled>
        <label class="compl">${task}</label>
        <button class="bin" onclick="deleteCompletedTask(${index})"><img src="svg/bin.svg"/></button>
      </li>
    `;
  });
  completedList.innerHTML = html;
}

function completeTask(index) {
  let tasks = JSON.parse(localStorage.getItem('unfinished') || '[]');
  let completedTasks = JSON.parse(localStorage.getItem('completed') || '[]');
  let task = tasks.splice(index, 1)[0];
  completedTasks.push(task);
  localStorage.setItem('unfinished', JSON.stringify(tasks));
  localStorage.setItem('completed', JSON.stringify(completedTasks));
  showTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem('unfinished') || '[]');
  tasks.splice(index, 1);
  localStorage.setItem('unfinished', JSON.stringify(tasks));
  showTasks();
}

function deleteCompletedTask(index) {
  let completedTasks = JSON.parse(localStorage.getItem('completed') || '[]');
  completedTasks.splice(index, 1);
  localStorage.setItem('completed', JSON.stringify(completedTasks));
  showCompletedTasks();
}

showTasks();

