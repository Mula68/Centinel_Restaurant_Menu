// storing user info

let users = [];

const addUser = (ev) => {
    ev.preventDefault();

    let user = {
        userName: document.getElementById('username').value, 
        email: document.getElementById('email').value,
        password: document.getElementById('passwd').value
    };

    users.push(user);

    document.querySelector('form').reset();


    console.warn('added', {users});

    localStorage.setItem('UserCredentials', JSON.stringify(users));

    alert('Thank you for registering with us');

    // /let message = document.querySelector('#msg');

    // message.textContent = '\n' + JSON.stringify(users);
    
}

document.addEventListener(
    'DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addUser);
    }
);

// login authorization

let login_auth = localStorage.getItem('UserCredenttials');

function makeAuth() {

    let email = document.getElementById('email_login').value;

    let passwd = document.getElementById('passwd_login').value;

    for (let i = 0; i <= login_auth.length; i++) {
        if (email === login_auth.length[i] && passwd === login_auth.length[i]) {
            
        } else {
            
        }
        
    }

} 

