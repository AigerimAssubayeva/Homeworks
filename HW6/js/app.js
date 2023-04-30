const input = document.querySelector('input');
const addButton = document.querySelector('.addTask');
const notCompletedList = document.getElementById('notCompleted');
const completedList = document.getElementById('completed');

addButton.addEventListener('click', function() {
  const task = input.value.trim();
  if (task) {
    onAddTask(task)
    input.value = '';
  }
});

function showTasks() {
  fetch('http://localhost:3004/tasks')
    .then( json => json.json())
    .then(data => {
      let htmlNotCompleted = '<h2>All Tasks</h2>';
      let htmlCompleted = '<h2>Completed Tasks</h2>';
      data.forEach( task => {
        if(!task.isCompleted) {
          htmlNotCompleted += `
          <li>
            <input type="checkbox" onclick="completeTask(${task.id}, '${task.title}', ${!task.isCompleted})">
            <label>${task.title}</label>
            <button class="bin" onclick="deleteTask(${task.id})"><img src="svg/bin.svg"/></button>
          </li>
        `;
        } else {
          console.log(task.title)
          htmlCompleted += `
          <li>
            <input type="checkbox" checked disabled>
            <label class="compl">${task.title}</label>
          </li>
        `;
        }
      });  
      notCompletedList.innerHTML = htmlNotCompleted;
      completedList.innerHTML = htmlCompleted;
    })
}


function completeTask(id, title, isCompleted) {
    fetch(`http://localhost:3004/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, isCompleted})
    })
}

function deleteTask(id) {
    fetch(`http://localhost:3004/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    })
}

function onAddTask() {
  const input = document.getElementById('task-title');
  const title = input.value;
  if (title) {
    fetch("http://localhost:3004/tasks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, isCompleted: false})
    });
    document.getElementById('find').value = '';
  }
 
}

showTasks();