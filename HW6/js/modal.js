// 

const modal = document.getElementById('modal');
const modalOpen = document.getElementById('newTask');
const modalClose = document.querySelector('.cancel');
const taskTitle = document.getElementById('task-title');
const addTask = document.getElementById('addTask');

modalOpen.addEventListener('click', function() {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
});

addTask.addEventListener('click', function() {
  modal.style.display = 'none';
});

taskTitle.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask.click();
  }
});

function changeTheColorOfButton() {
  if (taskTitle.value !== "") {
    addTask.style.background = "#3C86F4";
  } else {
    addTask.style.background = "#D3D3D3";
  }
}
