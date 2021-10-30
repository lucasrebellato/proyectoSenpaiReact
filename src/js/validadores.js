/* nav menu */

// const elBoton = document.querySelector("button");
// const navMenu = document.querySelector(".nav_1");
// elBoton.addEventListener("click", () =>  {
//     navMenu.classList.toggle("nav_menu");
// });


/* declaracion de variables */


let realName=true;
let realLast=true;
let realAddress=true;
let realNumber=true;
let realEmail=true;
let realPassword=true;

let numRegEx = /\d/;
let emailRegEx = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

/* validador de contacto */


export function validateContact (name, lastname, email) {
    
    if(name.length < 2 || numRegEx.test(name)){
        document.getElementById('nameError').classList.remove('hidden');
        realName=false;
    }else{
        document.getElementById('nameError').classList.add('hidden');
    }
    
    if(lastname.length < 2 || numRegEx.test(lastname)){
        document.getElementById('lastnameError').classList.remove('hidden');
        realLast=false;
    }else{
        document.getElementById('lastnameError').classList.add('hidden');
    }

    if(!emailRegEx.exec(email)){
        document.getElementById('emailError').classList.remove('hidden');
        realEmail=false;
    }else{
        document.getElementById('emailError').classList.add('hidden');
    }

    if((realName && realEmail) && realLast){
        document.getElementById('sendCorrect').classList.remove('hidden');
        document.getElementById('name').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('email').value = "";
        document.getElementById("contact-comment").value = "";
            
    }else{
        document.getElementById('sendCorrect').classList.add('hidden');
    }
         
}


/* validador de crear usuario */
    
const validateSignup = () => {
    let name = document.getElementById('signup-name').value;
    let lastname = document.getElementById('signup-lastname').value;
    let address = document.getElementById('signup-address').value;
    let telnumber = document.getElementById('signup-number').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
   
    
    

    if(name.length < 2 || numRegEx.test(name)){
        document.getElementById('signup-nameError').classList.remove('hidden');
        realName = false;
    }else{
        document.getElementById('signup-nameError').classList.add('hidden');
    }
    
    if(lastname.length < 2 || numRegEx.test(lastname)){
        document.getElementById('signup-lastnameError').classList.remove('hidden');
        realLast=false;
    }else{
        document.getElementById('signup-lastnameError').classList.add('hidden');
    }

    if(!emailRegEx.exec(email)){
        document.getElementById('signup-emailError').classList.remove('hidden');
        realEmail=false;
    }else{
        document.getElementById('signup-emailError').classList.add('hidden');
    }

    if(password.length < 6){
        document.getElementById('signup-passwordError').classList.remove('hidden');
        realPassword=false;
    }else{
        document.getElementById('signup-passwordError').classList.add('hidden');
    }

    if(address.length < 6){
        document.getElementById('signup-addressError').classList.remove('hidden');
        realAddress=false;
    }else{
        document.getElementById('signup-addressError').classList.add('hidden');
    }

    if(telnumber.length < 8){
        document.getElementById('signup-numberError').classList.remove('hidden');
        realNumber=false;
    }else{
        document.getElementById('signup-numberError').classList.add('hidden');
    }


    if((realAddress && realPassword) && ((realNumber && realEmail) && (realName && realLast))){
        document.getElementById('signup-correct').classList.remove('hidden');

        document.getElementById('signup-password').value = "";
        document.getElementById('signup-email').value = "";
        document.getElementById('signup-name').value = "";
        document.getElementById('signup-lastname').value = "";
        document.getElementById('signup-address').value = "";
        document.getElementById('signup-number').value = "";
    }


}




/* validador de login */

const validateLogin = () => {

    
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
   
  

    if(!emailRegEx.exec(email)){
        document.getElementById('login-emailError').classList.remove('hidden');
        realName=false;
    }else{
        document.getElementById('login-emailError').classList.add('hidden');
    }

    if(password.length < 6){
        document.getElementById('login-passwordError').classList.remove('hidden');
        realPassword=false;
    }else{
        document.getElementById('login-passwordError').classList.add('hidden');
    }

    if(realPassword && realEmail){
        document.getElementById('login-password').value = "";
        document.getElementById('login-email').value = "";
    }
     
}

