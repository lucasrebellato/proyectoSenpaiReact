import '../../assets/styles/user.css'
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  
const SignIn = () =>{
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [realEmail, setRealEmail] = useState (true)
    const [realPassword, setRealPassword] = useState (true)

 
    return(
        <div id="login-conteiner">
        <Link to= "/Shop"  className="fa fa-arrow-circle-left"></Link>
        <h1>Ingresar</h1>
        <h1 className="fa fa-user" style={{fontSize: "40px"},{color: "tomato"}}></h1>
        
        <form>
            
            <h3>Correo electronico</h3>
            <input type="text" name="email" id="login-email" placeholder="Correo electronico" onChange={e => setEmail (e.target.value)} value={email}/>
            {
                !realEmail && (
                    <p className="error">Verifique su email</p>
                    )
            }
            
            <h3>Contraseña</h3>
            <input type="password" name="password" id="login-password" placeholder="Contraseña" onChange={e => setPassword (e.target.value)} value={password}/>
            {
                !realPassword && (
                    <p className="error">Verifique su contraseña</p>
                    )
            }
            
            <button type="button" onClick="validateLogin()">Ingresar</button>
        </form>
        
        <Link to ="/signIn">Crear cuenta</Link>

    </div>
    );
}



export default SignIn;