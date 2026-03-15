import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }){
    const [cart, setCart] = useState([])

    const addItem = (product) => {
    setCart((prevCart) => {
        const isProductInCart = prevCart.some((item) => item.id === product.id);

        if (isProductInCart) {
            return prevCart.map((item) =>
                item.id === product.id ? { ...item, count: item.count + product.count } : item
            );
        }
        return [...prevCart, product];
    });
    };

    const getQuantity = () =>{
        const total = cart.reduce((acc, current) => acc + current.count, 0)
        return total
    }

    const getTotal = () =>{
        const total = cart.reduce((acc, current) => acc + (current.count * current.price), 0)
        return total
    }

    const removeItem = (id) => {
    const updatedCart = cart.filter(product => product.id !== id);
    setCart(updatedCart);
    }
    
    return(
        <CartContext.Provider value={{ cart, addItem, getQuantity, removeItem, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;