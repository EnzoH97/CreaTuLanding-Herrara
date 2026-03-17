import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../../firebase/database';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import Checkout from './Checkout';

function CheckoutContainer(){
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
    e.preventDefault()

    if (!cart.length) {
        navigate('/')
    toast.error("No podés finalizar la compra si tu carrito esta vacio")
    return
    }

    const form = e.target
    const name = form.nombre.value
    const email = form.email.value
    const address = form.direccion.value
    const phone = form.telefono.value

    createOrder({
        user : {name, email, address, phone},
        items : cart,
        total : getTotal(),
        time : serverTimestamp()
    }, clearCart, navigate)

}

return(
    <Checkout handleSubmit={handleSubmit} />
)
}

export default CheckoutContainer;