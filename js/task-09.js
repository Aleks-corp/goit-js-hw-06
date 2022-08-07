function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  textColorEl.innerHTML = color;
}
const body = document.querySelector("body");
const textColorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", onChangeColor);
