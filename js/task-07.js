const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("change", (evt) => {
  textEl.style.fontSize = `${evt.target.value}px`;
});
