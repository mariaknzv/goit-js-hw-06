function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', randomColor);

function randomColor() {
  const randomColorValue = getRandomHexColor();
  document.body.style.backgroundColor = randomColorValue;
  spanColor.textContent = randomColorValue;
}

