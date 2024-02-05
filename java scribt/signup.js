let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let signUpBtn = document.getElementById("signUpBtn");
let alertMessage = document.getElementById("alertMessage");
let users = [];
signUpBtn.addEventListener("click", signUp);
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  let user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (checkInputs() == true) {
    getAlertMessage("all inputs required", "red");
  } else {
    if (checkEmail() == true) {
      getAlertMessage("Email already exist", "red");
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      getAlertMessage("success", "green");
      clearForm();
      
    }
  }
}

function getAlertMessage(text, color) {
  alertMessage.classList.replace("d-none", "d-block");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function checkInputs() {
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}
function checkEmail() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == emailInput.value) {
      return true;
    }
  }
}
