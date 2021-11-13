import react from 'react'
import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import CoffeesSection from '../Shop/Coffees';
import DessertsSection from '../Shop/Desserts';
import CartSection from '../Shop/Cart';



const Shop = () =>{
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (product) => {

        setTotal(total + product.price)
        let index = cart.indexOf(product)
        if(index != -1){
            cart[index].quantity+=1;
            setCart(cart);
        }else{
        setCart(cart.concat(product));
    }
    }

    const deleteFromCart = (product) => {
        setTotal(total - (product.price * product.quantity))
        let index = cart.indexOf(product);
        cart.splice(index,1);
        setCart(cart)

    }

    return (
        <main id="shop">

           <CoffeesSection addToCart={addToCart}/>
           
           <DessertsSection addToCart={addToCart}/>
 
           <CartSection cart={cart} delete={deleteFromCart} total={total}/>

    </main>
    ) 
}

export default Shop;












