const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", (evt) =>
  evt.target.value !== ""
    ? (nameOutput.innerHTML = evt.target.value)
    : (nameOutput.innerHTML = "Anonymous")
);
