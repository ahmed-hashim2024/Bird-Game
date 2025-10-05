let gun = document.querySelector("#aim");
let gameArea = document.querySelector("body");
let bird = document.querySelector("#baird");
let scoreElement = document.querySelector("#score");
let gameoversound = document.querySelector("#gameoversound");
let shotsound = document.querySelector("#shotsound");

let birdX = gameArea.offsetWidth / 2;
let birdY = gameArea.offsetHeight / 2;
let score = 0;
let stepX = 10;
let stepY = 5.5;
let idInterval;
const moveBird = function moveBird() {
  const gameAreaWidth = gameArea.offsetWidth;
  const gameAreaHeight = gameArea.offsetHeight;

  birdX += stepX;
  birdY += stepY;

  if (birdX < 0 || birdX > gameAreaWidth - bird.offsetWidth) stepX = -stepX;
  if (birdY < 0 || birdY > gameAreaHeight - bird.offsetHeight) stepY = -stepY;

  bird.style.left = `${birdX}px`;
  bird.style.top = `${birdY}px`;
};

const resetBirdPosition = function resetBirdPosition() {
  if (!bird) return;
  birdX = Math.random() * 600;
  birdY = Math.random() * 600;
};

window.addEventListener("load", () => {
  document.body.style.cursor = "none";

  gameArea.addEventListener("mousemove", (e) => {
    gun.style.left = `${e.clientX - gun.offsetWidth / 2}px`;
    gun.style.top = `${e.clientY - gun.offsetHeight / 2}px`;
  });

  bird.addEventListener("click", (e) => {
    resetBirdPosition();
    e.stopPropagation();
    shotsound.play();
    score += 1;
    scoreElement.textContent = `Score: ${score}`;
  });

  gameArea.addEventListener("click", (e) => {
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    gameoversound.play();
    alert("Game over");
  });

  myIntervalId = setInterval(moveBird, 50);
});
