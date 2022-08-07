const listOfCategories = document.querySelector("#categories");
const arrayOfCategories = listOfCategories.children;

console.log("Number of categories:", arrayOfCategories.length);

const firstCategoryContent = arrayOfCategories[0].children;
console.log("Category:", firstCategoryContent[0].textContent);
console.log("Elements:", firstCategoryContent[1].children.length);

const secondCategoryContent = arrayOfCategories[1].children;
console.log("Category:", secondCategoryContent[0].textContent);
console.log("Elements:", secondCategoryContent[1].children.length);

const thirdCategoryContent = arrayOfCategories[2].children;
console.log("Category:", thirdCategoryContent[0].textContent);
console.log("Elements:", thirdCategoryContent[1].children.length);
