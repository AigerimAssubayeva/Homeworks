import "./modal.css";

const modalElements = {
  modal: { type: 'div' },
  modalWindow: { type: 'div', class: 'modal-window' },
  modalTitle: { type: 'div', class: 'modal-title' },
  titleSpan: { type: 'span', textContent: 'Add New Task' },
  inputDiv: { type: 'div' },
  taskTitleInput: { type: 'input', id: 'task-title', class: 'task-title', placeholder: 'Task title' },
  modalButtons: { type: 'div', class: 'modal-buttons' },
  cancelButton: { type: 'button', class: 'cancel', textContent: 'Cancel' },
  addTaskButton: { type: 'button', class: 'addTask', id: 'addTask', textContent: 'Add Task', style: 'background: #D3D3D3;' },
};

const createElement = ({ type, ...props }) => {
  const element = document.createElement(type);
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  return element;
};

const modal = createElement(modalElements.modal);
const modalWindow = createElement(modalElements.modalWindow);
const modalTitle = createElement(modalElements.modalTitle);
const titleSpan = createElement(modalElements.titleSpan);
const inputDiv = createElement(modalElements.inputDiv);
const taskTitleInput = createElement(modalElements.taskTitleInput);
const modalButtons = createElement(modalElements.modalButtons);
const cancelButton = createElement(modalElements.cancelButton);
const addTaskButton = createElement(modalElements.addTaskButton);

modalTitle.appendChild(titleSpan);

inputDiv.appendChild(taskTitleInput);

modalButtons.appendChild(cancelButton);
modalButtons.appendChild(addTaskButton);

modalWindow.appendChild(modalTitle);
modalWindow.appendChild(inputDiv);
modalWindow.appendChild(modalButtons);

modal.appendChild(modalWindow);
document.body.appendChild(modal);

const modalOpen = document.getElementById('newTask');
const modalClose = document.querySelector('.cancel');
const taskTitle = document.getElementById('task-title');
const addTask = document.getElementById('addTask');

modalOpen.addEventListener('click', () => {
  modal.style.display = 'block';
});

function changeTheColorOfButton() {
  addTaskButton.style.background = taskTitleInput.value !== '' ? '#3C86F4' : '#D3D3D3'
}

taskTitleInput.addEventListener('keyup', changeTheColorOfButton);

cancelButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

addTask.addEventListener('click', () => {
  modal.style.display = 'none';
});

taskTitle.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask.click();
  }
});


// Search
const searchTask = document.getElementById("find");

function filterList() {
  const list = document.querySelectorAll("li");
  const searchText = searchTask.value.toLowerCase();

  list.forEach((item) => {
    const searchedtext = item.innerText.toLowerCase();

    if (searchedtext.includes(searchText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

searchTask.addEventListener("input", filterList);

export default cancelButton