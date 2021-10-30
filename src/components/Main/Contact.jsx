import React, { useEffect, useState } from "react";
import '../../assets/styles/page.css'
// import * as utils from "../../js/validadores"


const Contact = () => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState ("")
    const [email, setEmail] = useState ("")
    const [realName, setRealName] = useState (true)
    const [realLastname, setRealLastname] = useState (true)
    const [realEmail, setRealEmail] = useState (true)
    const [allOk, setAllOk] = useState ("")


    const validateContact = () => {

        console.log("hola")

        let numRegEx = /\d/;
        let emailRegEx = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

        if(name.length < 2 || numRegEx.test(name)){
            setRealName(false);
        }else{
            setRealName(true);
        }

        if(lastname.length < 2 || numRegEx.test(lastname)){
            setRealLastname(false);
        }else{
            setRealLastname(true);
        }

        if(!emailRegEx.exec(email)){
            setRealEmail(false);
        }else{
            setRealEmail(true);
        }

        if((realEmail && realLastname) && realLastname){
            setAllOk(true);
            setName("")
            setLastname("")
            setEmail("")
        }else{
            setAllOk(false);
        }

        console.log(realName)
        console.log(realLastname)
        console.log(realEmail)
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
                        !realName && (
                            <p className="error">Verifique su nombre</p>
                        )
                        }
                        
                        <input type="text" name="lastname" id="lastname" placeholder="Apellido" onChange={e => setLastname (e.target.value)} value={lastname}/>
                        {
                        !realLastname && (
                            <p className="error">Verifique su apellido</p>
                        )
                        }
                        
                        <input type="text" name="email" id="email" placeholder="Correo electronico" onChange={e => setEmail (e.target.value)} value={email}/> 
                        {
                        !realEmail && (
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