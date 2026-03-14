import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { useNavigate } from "react-router";
import './CartContainer.css'

function CartContainer() {
    const { cart, removeItem } = useContext(CartContext)
    const navigate = useNavigate()
    return(
    <div className='caja-carrito'>
        <h2>Tu compra</h2>
        <ul className='lista-compra' >
            {cart.map(el => (
            <li key={el.id} className='item-compra'>
                <img src={el.thumbnail} alt={el.title} />
                <div className='item-info'>
                    <div className='item-detalles'>
                        <p className='item-nombre'>{el.nombre}</p>
                        <p className='item-cantidad'>Cantidad: {el.count}</p>
                    </div>
                    <p className='item-precio'> ${el.price * el.count}</p>
                    <button className="btn-eliminar" onClick={() => removeItem(el.id)} title="Eliminar producto">
                        🗑️
                    </button>
                </div>
            </li>
        ))}
        </ul>
    {cart.length > 0 ? (
            <div>
                <div className="total-pagar">
                    <span>Total:</span>
                    <span>${cart.reduce((acc, item) => acc + (item.price * item.count), 0).toFixed(2)}</span>
                </div>
                <button className='btn-finalizar' onClick={()=> navigate(`/checkout`)}>
                Iniciar compra
                </button>
            </div>

        ) : (
            <p>El carrito está vacío</p>
        )}
    </div>
    )
}

export default CartContainer;
