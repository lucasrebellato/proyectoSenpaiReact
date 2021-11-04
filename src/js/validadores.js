/* declaracion de variables */

let numRegEx = /\d/;
let emailRegEx = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

/* funciones */

const validateNameOrLast = (nombre) =>{
    return (nombre.length < 2 || numRegEx.test(nombre));
}

const validateEmail = (email) =>{
    return !emailRegEx.exec(email);
}

const validatePassword = (password) =>{
    return (password.length < 6 || !passRegEx.exec(password));
}

const validateAddress = (address) =>{
    return (address.length < 6);
}

const validateTelephone = (number) =>{
    return (number.length < 8);
}

