// Напиши скрипт, який під час набору тексту в інпуті input #name-input(подія input),
// підставляє його поточне значення в span #name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");
const defaultName = nameRef.textContent;

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    nameRef.textContent = defaultName;
  } else {
    nameRef.textContent = event.currentTarget.value;
  }
}
