import { Link } from 'react-router';
import './OrderConfirmationStyles.css'

function formatDate(iso) {
    if (!iso) return null
    return new Date(iso).toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' })
}

function OrderConfirmation({ order }) {
    const date = formatDate(order.createdAt)

    return (
        <section className="confirmacion" aria-labelledby="confirmacion-titulo">
            <h2 id="confirmacion-titulo">¡Gracias por tu compra, {order.user.name}!</h2>

            <p className="confirmacion-pedido">
                Número de pedido: <strong>{order.id}</strong>
            </p>
            <p className="confirmacion-nota">Guardalo para cualquier consulta.</p>
            {date && <p className="confirmacion-nota">Fecha: {date}</p>}

            <h3>Detalle de tu compra</h3>
            <ul className="confirmacion-lista">
                {order.items.map(item => (
                    <li key={item.id} className="confirmacion-item">
                        <span>{item.count} × {item.title}</span>
                        <span>${item.price * item.count}</span>
                    </li>
                ))}
            </ul>

            <p className="confirmacion-total">
                <span>Total</span>
                <span>${order.total}</span>
            </p>

            <h3>Datos de entrega</h3>
            <p className="confirmacion-datos">
                {order.user.address}<br />
                {order.user.email}<br />
                {order.user.phone}
            </p>

            <Link className="confirmacion-boton" to="/">Volver al catálogo</Link>
        </section>
    )
}

export default OrderConfirmation;
