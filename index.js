function signUp(source) {
    let username = source.parentElement.children[1].value;
    let password = source.parentElement.children[2].value;
    if(username.length <= 7 || password.length <= 7 || username.indexOf(' ')!==-1 || password.indexOf(' ')!== -1) {
        alert("Username and password must be at least 8 characters long, and cannot contain spaces.");
    }
    else {
        localStorage.setItem(username, password);
        alert("Your account has been created!");
    }
}
function logIn(source) {
    let username = source.parentElement.children[1].value;
    let password = source.parentElement.children[2].value;
    if (localStorage.getItem(username) === null) {
        alert("This account does not exist.");
    }
    else if (password == (localStorage.getItem(username))) {
        alert("Successfully logged in.");
        window.location = "dashboard.html";
    }
    else {
        alert("Incorrect password.");
    }
}