import React, { useEffect, useState } from "react";
import '../../assets/styles/page.css'
// import * as utils from "../../js/validadores"


const Contact = () => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState ("")
    const [email, setEmail] = useState ("")
    const [falseName, setFalseName] = useState (false)
    const [falseLastname, setFalseLastname] = useState (false)
    const [falseEmail, setFalseEmail] = useState (false)
    const [allOk, setAllOk] = useState ("")


    const validateContact = () => {

        

        let numRegEx = /\d/;
        let emailRegEx = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

        if(name.length < 2 || numRegEx.test(name)){
            setFalseName(true);
        }else{
            setFalseName(false);
        }

        if(lastname.length < 2 || numRegEx.test(lastname)){
            setFalseLastname(true);
        }else{
            setFalseLastname(false);
        }

        if(!emailRegEx.exec(email)){
            setFalseEmail(true);
        }else{
            setFalseEmail(false);
        }

        if((!falseEmail && !falseLastname) && !falseLastname){
            setAllOk(false);
           
        }else{
            console.log("hola")
            setAllOk(true);
            setName("")
            setLastname("")
            setEmail("")
        }

        // console.log(realName)
        // console.log(realLastname)
        // console.log(realEmail)
    }



    return (
        
        <main id="contact">


            <section>

                <h1>¡Contactanos!</h1>

                <div id="in-contact">

                    <article>
                    <p>Puedes contactarnos a este numero o enviarnos un mensaje el cual será respondido al correo asociado a tu cuenta </p>    
                    </article>
            
                    <form action="">
                    
                        <input type="text" name="name" id="name" placeholder="Nombre" onChange={e => setName (e.target.value)} value={name}/>
                        {
                        falseName && (
                            <p className="error">Verifique su nombre</p>
                        )
                        }
                        
                        <input type="text" name="lastname" id="lastname" placeholder="Apellido" onChange={e => setLastname (e.target.value)} value={lastname}/>
                        {
                        falseLastname && (
                            <p className="error">Verifique su apellido</p>
                        )
                        }
                        
                        <input type="text" name="email" id="email" placeholder="Correo electronico" onChange={e => setEmail (e.target.value)} value={email}/> 
                        {
                        falseEmail && (
                            <p className="error">Verifique su email</p>
                        )
                        }
                        <textarea name="comment" id="contact-comment" cols="30" rows="10" placeholder="Introduce tu comentario..."></textarea>
                        
                        <button type="button" onClick={() => validateContact()}>Enviar</button>
                        {
                        allOk && (
                            <p className="correct">Mensaje enviado correctamente</p> 
                        )
                        }
                       
                
                    </form>
                
                    
                </div>
                
            </section>


        </main>
    ); 
}


export default Contact;