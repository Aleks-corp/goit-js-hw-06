function onValidInputSymbolsLength(evt) {
  if (Number(inputEl.dataset.length) === evt.target.value.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onValidInputSymbolsLength);
