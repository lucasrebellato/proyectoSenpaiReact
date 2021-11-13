import react from 'react'
import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import CoffeesSection from '../Shop/Coffees';
import DessertsSection from '../Shop/Desserts';
import CartSection from '../Shop/Cart';



const Shop = () =>{
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        let index = cart.indexOf(product)
        if(index >= 0){
            setCart(cart[index].quantity+=1);
        }else{
        setCart(cart.concat(product));
    }
        console.log(cart)
    }

    const deleteFromCart = (product) => {
        // let index = cart.indexOf(product)
        
        console.log(cart)
    }

    return (
        <main id="shop">

           <CoffeesSection addToCart={addToCart}/>
           
           <DessertsSection addToCart={addToCart}/>
 
           <CartSection cart={cart} delete={deleteFromCart}/>

    </main>
    ) 
}

export default Shop;












