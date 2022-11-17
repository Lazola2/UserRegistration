// get the form components 
let userName = document.querySelector('#name');
let userSurname = document.querySelector('#surname');
let userEmail = document.querySelector('#email');
let userPassword = document.querySelector('#password');
let repeatUserPassword = document.querySelector('#repeat-password');
let submitButton = document.querySelector('#btnSubmit');
let displayButton = document.querySelector('#btnDisplay');

function User(userName, userSurname, userEmail, userPassword, repeatUserPassword) {
    // user attributes
    this.userName = userName;
    this.userSurname = userSurname;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
    this.repeatUserPassword = repeatUserPassword;
}

let users = [];

submitButton.addEventListener('click', (e) => {
    // prevent the page from reloading
    e.preventDefault();

    // create an instance of a user
    let newUser = new User(
        userName.value, userSurname.value, userEmail.value, userPassword.value, repeatUserPassword.value
    );

    // append the new user to the array of users
    users.push(newUser);
});

displayButton.addEventListener('click', (e) => {
    // prevent the page from reloading
    e.preventDefault();

    // console the data in the table
    console.table(users);
});
