let counterValue = 0;
const valueEl = document.querySelector("#value");

const decrementCounterBtn = document.querySelector("[data-action='decrement']");
const incrementCounterBtn = document.querySelector("[data-action='increment']");
decrementCounterBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.innerHTML = counterValue;
});
incrementCounterBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.innerHTML = counterValue;
});
