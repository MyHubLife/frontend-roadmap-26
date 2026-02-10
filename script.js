console.log('Hello, World!');

const LikeCountDisplay = document.getElementById('likeCount');
const LikeBtn = document.querySelectorAll('.like-btn');

let totalLikes = 0;
let myItem = [];

LikeBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
      totalLikes++;
    }else {
      totalLikes--;
    }
    LikeCountDisplay.textContent = totalLikes;
  });
});

const userNameInput = document.getElementById('user-name');
const displayNameSpan = document.getElementById('display-name');
const addBtn = document.getElementById('add-btn');
const itemLists = document.querySelector('.item-lists');

userNameInput.addEventListener('input', function () {
  displayNameSpan.textContent = this.value || `Guest`;
});

// addBtn.addEventListener('click', function () {
//   const newItem = document.createElement('div');
//   console.log(userNameInput.value);
//   newItem.textContent = userNameInput.value;
//   newItem.classList.add('item');
//   itemLists.appendChild(newItem);
// });

function render() { 
  itemLists.innerHTML = '';
  myItem.forEach(title => {
    itemLists.innerHTML += `<div class="item">${title}</div>`;
  });
}

addBtn.addEventListener('click', function () {
  myItem.push(userNameInput.value);
  console.log(myItem);
  render();
  userNameInput.value = '';
});

const Input = document.getElementById('task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const taskItem = document.querySelector('.task-item'); 
const delTaskBtn = document.querySelector('.delete-task-btn');

let taskList = [];

function renderTask() {
  const taskItem = document.getElementById('task-item');
  taskItem.innerHTML = '';
  taskList.forEach(task => {
    taskItem.innerHTML += `<div class="task-card">
    <div class="task-id">ID: ${task.id}</div>
    <div class="task-text">TASK: ${task.text}</div>
    <button class="delete-task-btn" onclick="deleteTask(${task.id})">Delete</button>
    </div>`;
  });
}

function deleteTask(id) {
  taskList = taskList.filter(task => task.id !== id);
  renderTask();
}

addTaskBtn.addEventListener('click', function () {
  const newTask = {
    id: Date.now(),
    text: Input.value
  };
  taskList.push(newTask);
  renderTask();
  Input.value = '';
});

