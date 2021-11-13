import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";




const CartSection = (props) =>{

    return (
        <main>

            <div id="cart">
                
                <h1>Carrito</h1>

                <ul id="cart-holder">
                

                {   
                    props.cart.length == 0 &&(
                        <p style={{textAlign:"center"}} className="error">Usted no ha añadido productos</p>
                    )
                }
                {
                    console.log(props.cart)
                }

                {
                    props.cart.map((product, index) =>{
                        
                        return<li>
                            
                            <p>{product.name}</p>
                            <input id="quantity" value={product.quantity} disabled/>
                            <p type="number">${product.price * product.quantity}</p>
                            <button onClick={() => props.delete(product)}>Eliminar</button>
                            
                        </li>
                    })
                }
                



                </ul>
            
                <p>$<span id="total-holder">{props.total}</span></p>
            
            </div>

        
        </main>
    ) 
}

export default CartSection;





