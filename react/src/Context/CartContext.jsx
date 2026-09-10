import { useState, useEffect } from "react";
import { createContext } from "react";

export const cartContext = createContext();
export const cartActionsContext = createContext();


export const CartProvider = (props) =>{
    const [cartItems, setCartItems] = useState(()=>{
        
        const savedCart = localStorage.getItem("cartItems")

        return savedCart ? JSON.parse(savedCart) : [];
    })
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }, [cartItems])
    return(

    <cartContext.Provider value={cartItems}>
     <cartActionsContext.Provider value={setCartItems}>
        {props.children}
     </cartActionsContext.Provider>
    </cartContext.Provider>
    )
    
};