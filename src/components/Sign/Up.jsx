import '../../assets/styles/user.css'
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  const SignUp = () =>{
    // const [name, setEmail] = useState ("")
    // const [lastname, setPassword] = useState ("")
    // const [address, set] = useState (true)
    // const [phone, setPhone] = useState (true)
    // const [email, setEmail] = useState ("")
    // const [password, setPassword] = useState ("")
    // const [realEmail, setRealEmail] = useState (true)
    // const [realPassword, setRealPassword] = useState (true)

    return (
        <div id="signup-conteiner">
            <Link to="/SignIn" className="fa fa-arrow-circle-left"></Link>

            <h1>Crear cuenta</h1>
            <h1 className="fa fa-user" style={{fontSize:"40px"},{color:"tomato"}}></h1>
        
            <form>
                
                <h3>Nombre</h3>
                <input type="text" name="nombre" id="signup-name" placeholder="Nombre"/>
                <p id="signup-nameError" className="error hidden">Verifique su nombre</p>

                <h3>Apellido</h3>
                <input type="text" name="apellido" id="signup-lastname" placeholder="Apellido"/>
                <p id="signup-lastnameError" className="error hidden">Verifique su apellido</p>

                <h3>Dirección</h3>
                <input type="text" name="direccion" id="signup-address" placeholder="Dirección"/>
                <p id="signup-addressError" className="error hidden">Verifique su dirección</p>

                <h3>Telefono</h3>
                <input type="number" name="numero" id="signup-number" placeholder="Telefono"/>
                <p id="signup-numberError" className="error hidden">Verifique su telefono</p>

                <h3>Correo electronico</h3>
                <input type="text" name="email" id="signup-email" placeholder="Correo electronico"/>
                <p id="signup-emailError" className="error hidden">Verifique su correo</p>

                <h3>Contraseña</h3>
                <input type="password" name="password" id="signup-password" placeholder="Contraseña"/>
                <p id="signup-passwordError" className="error hidden">Debe tener al menos 6 caracteres</p>

                <button type="button" onclick="validateSignup()">Crear</button> 
                <p id="signup-correct" className="correct hidden">Cuenta creada correctamente</p>
            </form>
            

        </div>
    )
    

}

export default SignUp;