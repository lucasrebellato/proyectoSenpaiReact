import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';




const CoffeesSection = (props) =>{

    const [coffees, setCoffees] = useState([])
    const [errorMessageC, setErrorMessageC] = useState("")
    const [hasErrorC, setHasErrorC] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:4000/Coffees")
        .then(data => data.json())
        .then(data =>{
            setCoffees(data);
            setHasErrorC(false);
            setLoading(false);
        }
            )
        .catch(e =>{
            setErrorMessageC(e.message);
            setHasErrorC(true);
            setLoading(false);
        }
            )
    },[])

    return (
    

        <main>

                <h1>Nuestros cafes</h1>

                <div id="coffee-holder">

            {
                loading &&(
                    <ReactLoading type={"spin"} />
                    )

            }    

            {
                hasErrorC &&(
                    <h1 className="error">Se ha producido un error N°{errorMessageC}</h1>
                )
            }
                {
                        coffees.map(coffee =>{
                            
                            let id = coffee.id

                            return (    
                                    
                                    <div className="product-container" key={id}>
                                        <h3>{coffee.name}</h3>
                                        <img src={require("../../assets/shop/cafes/"+id+".jpg").default} alt={coffee.name}/>
                                        <h3 className="price">${coffee.price}</h3>
                                        <button onClick={() => props.addToCart(coffee)}>Añadir</button>
                                        </div>             
                            )            
                        })
                    } 

            
                </div>
        
       

        
        </main>
    ) 
}

export default CoffeesSection;







