let welcomeMessage = document.getElementById("welcomeMessage");
let lougOutBtn = document.getElementById("lougOutBtn");

if(localStorage.getItem("userName") != null){
    welcomeMessage.innerHTML = `Welcome ${localStorage.getItem("userName")}`

}

welcomeMessage.style.fontSize = "50"

lougOutBtn.addEventListener('click', function(){
    window.location.href = 'signIn.html';
    localStorage.removeItem("userName")
})