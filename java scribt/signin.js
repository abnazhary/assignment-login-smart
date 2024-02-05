let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let signUpBtn = document.getElementById("signUpBtn");
let alertMessage = document.getElementById("alertMessage");

let users = [];
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}
signUpBtn.addEventListener("click", signIn);
function signIn() {
  if (checkInputs() == true) {
    getAlertMesage("All inputs required", "red");
  } else {
    if (checkEmailAndPassword() == true) {
      window.location.href = "home.html";
    } else {
      getAlertMesage("Email or password is not corect", "red");
    }
  }
}
function checkEmailAndPassword() {
  for (i = 0; i < users.length; i++) {
    if (
      users[i].email == emailInput.value &&
      users[i].password == passwordInput.value
    ) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
}

function getAlertMesage(text, color) {
  alertMessage.classList.replace("d-none", "d-block");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}

function checkInputs() {
  if (emailInput.value == "" || passwordInput.value == "") {
    return true;
  } else {
    return false;
  }
}
