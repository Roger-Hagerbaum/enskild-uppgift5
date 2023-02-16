let submit = document.querySelector("#submit");
let userName = document.querySelector("#userName");
let password = document.querySelector("#password");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(!userName == null && !password == null){
        alert("Welcome: " + userName.value);
    }else
    alert("You must loggin or sign up");
    
 });