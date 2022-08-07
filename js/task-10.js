function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxesInput.innerHTML = "";
  amountInput.value = "";
}
function createBoxes(amount) {
  destroyBoxes();

  let width = 20;
  let height = 20;
  const boxesArray = [];

  for (let i = 0; i < Number(amount); i += 1) {
    const box = document.createElement("div");
    box.style.width = `${(width += 10)}px`;
    box.style.height = `${(height += 10)}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
  }

  boxesInput.append(...boxesArray);
}

const amountInput = document.querySelector("#controls input");
const boxesInput = document.querySelector("#boxes");

const createBtn = document.querySelector("[data-create]");
createBtn.addEventListener("click", () => createBoxes(amountInput.value));
const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);
