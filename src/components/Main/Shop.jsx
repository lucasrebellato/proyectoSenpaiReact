import react from 'react'
import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";



const Shop = () =>{
    const [coffees, setCoffees] = useState([])
    const [desserts, setDesserts] = useState([])
    const [errorMessageC, setErrorMessageC] = useState("")
    const [hasErrorC, setHasErrorC] = useState("")
    const [errorMessageD, setErrorMessageD] = useState("")
    const [hasErrorD, setHasErrorD] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:4000/Coffees")
        .then(data => data.json())
        .then(data =>{
            setCoffees(data);
            setHasErrorC(false);
        }
            )
        .catch(e =>{
            setErrorMessageC(e);
            setHasErrorC(true);
        }
            )
    },[]) 

    useEffect(() => {
        fetch("http://localhost:4000/Desserts")
        .then(data => data.json())
        .then(data =>{
            setDesserts(data);
            hasErrorD(false);
        }
            )
        .catch(e =>{
            setErrorMessageD(e);
            setHasErrorD(true);
        }
            )
    },[]) 


    return (
        <main id="shop">

            <h1>Nuestros cafes</h1>

            <div id="coffee-holder">



        {/* {
            hasErrorC &&(
                <h1 className="Error">Se ha producido un error N°{errorMessageC}</h1>
            )

        } */}
            {
                    coffees.map(cafe =>{
                        
                        let id = cafe.id

                        return (    
                                
                                 <div className="product-conteiner">
                                    <h3>{cafe.name}</h3>
                                    <img src={require("../../assets/shop/cafes/img-"+id+".jpg").default} alt={cafe.name}/>
                                    <h3 className="price">${cafe.price}</h3>
                                    <button onClick="addToCart('${cafe.id}')">Añadir</button>
                                    </div>             
                        )            
                    })
                } 

         
            </div>
           
            <h1>Nuestros postres</h1>

            <div id="food-holder">
            {/* {
            hasErrorD &&(
                <h1 className="Error">Se ha producido un error N°{errorMessageD}</h1>
            )

            } */}
            
            {
                    desserts.map(dessert =>{

                        let id = dessert.id

                        return (    
                                
                                 <div className="product-conteiner">
                                    <h3>{dessert.name}</h3>
                                    <img src={require("../../assets/shop/postres/img-"+id+".jpg").default} alt={dessert.name}/>
                                    <h3 className="price">${dessert.price}</h3>
                                    <button onClick="addToCart('${cafe.id}')">Añadir</button>
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

