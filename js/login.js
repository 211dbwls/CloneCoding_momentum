const loginText = document.querySelector("#login-text");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
    greeting.innerText = `Hello ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();  // submit해도 새로고침하지 않도록. 
    
    loginText.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {  // username이 없는 경우, 
    loginText.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {  // username이 있는 경우,
    paintGreeting(savedUsername);
}