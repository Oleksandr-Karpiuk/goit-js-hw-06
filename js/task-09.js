// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
// на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorRef = document.querySelector(".change-color");
const colorDescriptionRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonChangeColorRef.addEventListener("click", onButtonChangeColorClick);

function onButtonChangeColorClick() {
  let randomColor = getRandomHexColor();
  colorDescriptionRef.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;
}
