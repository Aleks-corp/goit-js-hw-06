const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");
const arrayOfIngredients = [];
ingredients.map((ingredient) => {
  const itemOfIngredient = document.createElement("li");
  itemOfIngredient.classList.add("item");
  itemOfIngredient.textContent = ingredient;
  arrayOfIngredients.push(itemOfIngredient);
});
listOfIngredients.append(...arrayOfIngredients);
