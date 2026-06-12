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


// VALIDACIONES DE DATOS

// 1. Validacion del que nombre (no espacios vacios y largo mínimo)
if (name.trim().length < 3) {
    toast.error("Por favor, ingresá un nombre válido (mínimo 3 caracteres).");
    return;
}

// 2. Validar formato de Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    toast.error("Por favor, ingresá un correo electrónico válido.");
    return;
}

// 3. Validar teléfono
const phoneRegex = /^\d{8,15}$/;
if (!phoneRegex.test(phone.trim())) {
    toast.error("El teléfono debe contener solo números (entre 8 y 15 dígitos).");
    return;
}

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