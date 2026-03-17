import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { useNavigate } from "react-router";
import ItemCart from "./ItemCart";

function CartContainer() {
    const { cart, removeItem, getTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
    navigate('/checkout');
    };

    return (
    <ItemCart
        cart={cart} 
        removeItem={removeItem} 
        getTotal={getTotal} 
        onCheckout={handleCheckout} 
    />
    );
}

export default CartContainer;