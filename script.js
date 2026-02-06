console.log('Hello, World!');

const LikeCountDisplay = document.getElementById('likeCount');
const LikeBtn = document.querySelectorAll('.like-btn');

let totalLikes = 0;

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