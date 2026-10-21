import { CartContext } from "./CartContext";
import { useState, useMemo, useCallback } from "react";

function CartProvider({ children }){
    const [cart, setCart] = useState([])

    const addItem = useCallback((product) => {
        setCart((prevCart) => {
            const isProductInCart = prevCart.some((item) => item.id === product.id);

            if (isProductInCart) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, count: item.count + product.count } : item
                );
            }
            return [...prevCart, product];
        });
    }, []);

    const updateQuantity = useCallback((id, newCount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, count: newCount } : item
            )
        );
    }, []);

    const removeItem = useCallback((id) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== id));
    }, []);

    const clearCart = useCallback(() => setCart([]), []);

    const getQuantity = useCallback(() => {
        return cart.reduce((acc, current) => acc + current.count, 0)
    }, [cart]);

    const getTotal = useCallback(() => {
        return cart.reduce((acc, current) => acc + (current.count * current.price), 0)
    }, [cart]);

    // El valor del contexto se pasa por referencia: solo cambia si cambia alguna dependencia
    const value = useMemo(
        () => ({ cart, addItem, updateQuantity, getQuantity, removeItem, getTotal, clearCart }),
        [cart, addItem, updateQuantity, getQuantity, removeItem, getTotal, clearCart]
    );

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;