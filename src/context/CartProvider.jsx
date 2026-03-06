import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }){
    const [cart, setCart] = useState([])

    const inCart = (product) => cart.some(el => el.id === product.id)

    const addItem = product => {
        if(!inCart(product)){
            setCart([...cart, product])
        }else{
            const copyCart = cart.map(el => {
                if(el.id === product.id) return {...product , count: el.count + product.count}
                return el;
            })
            setCart(copyCart)
        }
        
    }
    
    return(
        <CartContext.Provider value={{ cart, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;