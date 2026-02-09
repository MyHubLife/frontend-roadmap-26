console.log('Hello, World!');

const LikeCountDisplay = document.getElementById('likeCount');
const LikeBtn = document.querySelectorAll('.like-btn');

let totalLikes = 0;
let myTasks = [];

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
  myTasks.forEach(task => {
    itemLists.innerHTML += `<div class="item">${task}</div>`;
  });
}

addBtn.addEventListener('click', function () {
  myTasks.push(userNameInput.value);
  console.log(myTasks);
  render();
  userNameInput.value = '';
});