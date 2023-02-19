// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
let counterValue = 0;

const setCounterDecrement = () => {
  counterRef.textContent = counterValue -= 1;
};
const setCounterIncrement = () => {
  counterRef.textContent = counterValue += 1;
};

buttonDecrementRef.addEventListener("click", setCounterDecrement);
buttonIncrementRef.addEventListener("click", setCounterIncrement);
