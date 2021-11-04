import React, { useEffect, useState } from "react";
import '../../assets/styles/page.css'
// import * as utils from "../../js/validadores"


const Contact = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState ("")
    const [falseName, setFalseName] = useState ("")
    const [falseLastName, setFalseLastName] = useState ("")
    const [falseEmail, setFalseEmail] = useState ("")
    const [allOk, setAllOk] = useState (false)



    const validateContact = () => {

        let auxName = false;
        let auxLastName = false;
        let auxEmail = false;
        let numRegEx = /\d/;
        let emailRegEx = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

        if(name.length < 2 || numRegEx.test(name)){
            auxName=true;
        }else{
            auxName=false;
        }

        if(lastName.length < 2 || numRegEx.test(lastName)){
            auxLastName=true;
        }else{
            auxLastName=false;
        }

        if(!emailRegEx.exec(email)){
            auxEmail=true;
        }else{
            auxEmail=false;
        }

        if((auxName  || auxLastName) || auxEmail){
            setAllOk(false); 

        }else{
            
            setAllOk(true);
            cleanForm();   
        }

        setFalseName(auxName);
        setFalseLastName(auxLastName);
        setFalseEmail(auxEmail);
    }

    const cleanForm = () =>{
        setName("")
        setLastName("")
        setEmail("")
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
                        
                        <input type="text" name="lastname" id="lastname" placeholder="Apellido" onChange={e => setLastName (e.target.value)} value={lastName}/>
                        {
                        falseLastName && (
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