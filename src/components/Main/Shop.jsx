import react from 'react'
import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";



const Shop = () =>{
    const [coffees, setCoffees] = useState([])
    // const [desserts, setDesserts] = useState([])
    const [errorMessageC, setErrorMessageC] = useState("")
    const [hasErrorC, setHasErrorC] = useState("")

    useEffect(() => {
        fetch("http://localhost:4000/Coffees")
        .then(data => data.json)
        .then(data =>{
            setCoffees(data);
            hasErrorC(false);
        }
            )
        .catch(e =>{
            setErrorMessageC(e);
            setHasErrorC(true);
        }
            )
    },[]) 

    return (
        <main id="shop">

            <h1>Nuestros cafes</h1>

            <div id="coffee-holder"></div>

            <h1>Nuestros postres</h1>

            <div id="food-holder">
            {
                    coffees.map(cafe =>{
                        return (
                                 <div class="product-conteiner">
                                    <h3>{cafe.name}</h3>
                                    <img src={require("../../assets/shop/img-1.jpg").default} alt={cafe.name}/>
                                    <h3 class="price">${cafe.price}</h3>
                                    <button onclick="addToCart('${cafe.id}')">Añadir</button>
                                    </div>             
                        )            
                    })
                }
            </div>

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













// coffeUpload(){      
//     return(
//         `   <div class="product-conteiner">
//                 <h3>${this.name}</h3>
//                 <img src="../shop/img-${this.id}.jpg" alt="${this.name}">
//                 <h3 class="price">$${this.price}</h3>
//                 <button onclick="addToCart('${this.id}')">Añadir</button>
//             </div>`
//     )


// }

// foodUpload(){  
//     return(
//         `   <div class="product-conteiner">
//                 <h3>${this.name}</h3>
//                 <img src="../shop/img-${this.id}.jpg" alt="${this.name}">
//                 <h3 class="price">$${this.price}</h3>
//                 <button onclick="addToCart('${this.id}')">Añadir</button>
//             </div>`
//     )


// }

