const loginForm = document.getElementById("login");
const signupForm = document.getElementById("create");
const showLoginButton = document.getElementById("login-btn");
const showSignupButton = document.getElementById("create-btn");
showLoginButton.addEventListener("click", function () {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
});

showSignupButton.addEventListener("click", function () {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

const smLoginButton = document.getElementById("login-btn-sm");
const loginSection = document.getElementById("login-section-id");
const imageSlider = document.getElementById("imageSlider");
const smImage = document.getElementById("carousel-btn-sm");
smLoginButton.addEventListener("click", function () {
    loginSection.style.display = "block";
    imageSlider.style.display = "none";
});
smImage.addEventListener("click", function () {
    loginSection.style.display = "none";
    imageSlider.style.display = "block";
});

const msgLoginButton = document.getElementById("msgLogin");
const msgCreateButton = document.getElementById("msgCreate");

function createButton() { 
    msgCreateButton.style.display = "block";
}
function loginButton() { 
    msgLoginButton.style.display = "block";
}

