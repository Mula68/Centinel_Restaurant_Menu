var username=document.getElementById('username').value;
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;
var password2=document.getElementById('password2').value;

localStorage.setitem("username",username);
localStorage.setitem("username",email);
localStorage.setitem("username",password);
localStorage.setitem("username",password2);

document.getElementById("output").innerHTML= localStorage.getItem("username")

function myFunction(){
    alert("Signup Successfull");
}