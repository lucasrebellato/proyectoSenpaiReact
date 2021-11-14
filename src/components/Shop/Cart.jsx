import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";




const CartSection = (props) =>{

    return (
        <main>

            <div id="cart">
                
                <h1>Carrito</h1>

                <ul id="cart-holder">
                

              
                {
                    console.log(props.cart)
                }
          

                {   
                    props.cart.length == 0 &&(
                        <p style={{textAlign:"center"}} className="error notProduct">Usted no ha añadido productos</p>
                    )
                }

                {
                    props.cart.map((product, index) =>{
                        
                        let id= product.id;

                        return<li>
                            
                            <p>{product.name}</p>
                            <img style={{marginLeft:"8px"}} src={require("../../assets/shop/"+id+".jpg").default} alt={product.name}/>
                            <p>cantidad: {product.quantity}</p>
                            <p type="number">${product.price * product.quantity}</p>
                            <button onClick={() => props.delete(product)}>Eliminar</button>
                            
                        </li>
                    })
                }
                



                </ul>
            
                <p id="total-holder">Subtotal: ${props.total}</p>
            
            </div>

        
        </main>
    ) 
}

export default CartSection;





