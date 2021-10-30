import react from 'react'
import '../../assets/styles/page.css'




const Shop = () =>{
    return (
        <main id="shop">

            <h1>Nuestros cafes</h1>

            <div id="coffee-holder"></div>

            <h1>Nuestros postres</h1>

            <div id="food-holder"></div>

            <div id="cart">
                
                <h1>Carrito</h1>

                <ul id="cart-holder">
                
                </ul>
            
                <p>Total $<span id="total-holder">0</span></p>
            
            </div>

        
    </main>
    ) 
}

export default Shop;