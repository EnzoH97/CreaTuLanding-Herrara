
import toast from 'react-hot-toast';


function ItemCart({ cart, removeItem, getTotal, onCheckout, clearCart }) {

    const handleClearCart = () => {
        const confirmacion = window.confirm("¿Vaciar todo el carrito?");
        
        if (confirmacion) {
            clearCart();
            toast.success("Carrito vaciado correctamente");
        }
    }

    return (
    <div className='caja-carrito'>
        <h2>Tu compra</h2>
        <ul className='lista-compra'>
            {cart.map(el => (
            <li key={el.id} className='item-compra'>
                <img src={el.thumbnail} alt={el.title} />
                <div className='item-info'>
                    <div className='item-detalles'>
                        <p className='item-nombre'>{el.nombre}</p>
                        <p className='item-cantidad'>Cantidad: {el.count}</p>
                    </div>
                    <p className='item-precio'> ${el.price * el.count}</p>
                    <button 
                        className="btn-eliminar" 
                        onClick={() => removeItem(el.id)} 
                        title="Eliminar producto"
                    >
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
                <span>$ {getTotal()}</span>
            </div>
            <div className='acciones-Carrito'>
                <button className='btn-vaciar' onClick={handleClearCart}>
                    Vaciar carrito
                </button>
                <button className='btn-finalizar' onClick={onCheckout}>
                    Iniciar compra
                </button>
            </div>
        </div>
        ) : (
        <p>El carrito está vacío</p>
        )}
    </div>
    );
}

export default ItemCart;