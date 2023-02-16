let fullName= document.querySelector("#fullName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let repeatPassword = document.querySelector("#repeatPassword");
let submit = document.querySelector("#submit");
let num = document.querySelector("#num");
let cap = document.querySelector("#cap");
let low = document.querySelector("#low");
let speCh = document.querySelector("#speCh");
let minChar = document.querySelector("#minChar");

let numb = new RegExp("(?=.*?[0-9])");
let capi = new RegExp("(?=.*?[A-Z])");
let loww = new RegExp("(?=.*?[a-z])");
let spec = new RegExp("(?=.*?[#?!@$%^&*-])");
let minChart = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}");

function passwordCheck(param) {
    if (numb.test(param)) {
        num.style.color = "green";
    }  else {
        num.style.color = "red";
    }
    if (capi.test(param)) {
        cap.style.color = "green";
    }  else {
        cap.style.color = "red";
    }
    if (loww.test(param)) {
        low.style.color = "green";
    } else {
        low.style.color = "red";
    }
    if (spec.test(param)) {
        speCh.style.color = "green";
    } else {
        speCh.style.color = "red";
    }
    if (minChart.test(param)) {
        minChar.style.color = "green";
    }
    else {
        minChar.style.color = "red";
    }
}

password.addEventListener("keyup", (event) => {
    onkeyup = (event) => {
        passwordCheck(password.value);
    };

});

submit.addEventListener("click", (e) => {
   e.preventDefault();
   if(password.value == repeatPassword.value && !password.value == null ){
        alert("Thank you for registering " + fullName.value + "\n"+
   "Please verify your emali that was sent to " + email.value);
   window.location.href = 'index.html';
   } else{
      alert("The password do not match");
   }
});


