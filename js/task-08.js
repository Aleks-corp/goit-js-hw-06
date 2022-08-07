const formEl = document.querySelector(".login-form");
function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please enter E-mail and Password");
    return;
  }
  const objUserEntries = {
    email: email.value,
    password: password.value,
  };
  console.log("User:", objUserEntries);
  evt.currentTarget.reset();
}
formEl.addEventListener("submit", onFormSubmit);
