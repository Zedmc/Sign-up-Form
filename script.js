// Variables
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");
const emailField = document.getElementById("email-field");
const button = document.getElementById("button");

const container = document.getElementById("container");
const successContainer = document.getElementById("success-container");

const emailEntry = document.getElementById("email-entry");

const successButton = document.getElementById("success-button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    // Text to display
    emailError.innerHTML = "Valid email required";
    // Class to Add
    emailField.classList.add("error-display");
    emailField.style.color = "red";
    return false;
  }
  emailError.innerHTML = "";
  emailField.classList.remove("error-display");
  container.classList.add("switch");
  successContainer.classList.remove("switch");
  emailEntry.innerHTML = emailField.value;
  return true;
});

successButton.addEventListener("click", () => {
  successContainer.classList.add("switch");
  container.classList.remove("switch");
  emailField.value = "";
});
