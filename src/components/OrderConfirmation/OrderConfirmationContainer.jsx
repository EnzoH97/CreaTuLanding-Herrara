import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router';
import { getOrder } from '../../firebase/database';
import Cargando from '../ItemDetails/Spinner';
import OrderConfirmation from './OrderConfirmation';
import './OrderConfirmationStyles.css'

function OrderConfirmationContainer() {
    const { id } = useParams()
    const { state } = useLocation()
    const [result, setResult] = useState({ id: null, order: null })

    // Si venimos del checkout, el resumen llega por la navegación y no hace falta consultar la base
    const stateOrder = state?.order?.id === id ? state.order : null

    useEffect(() => {
        if (stateOrder) return

        let active = true
        getOrder(id)
            .then(order => { if (active) setResult({ id, order }) })
            .catch(() => { if (active) setResult({ id, order: null }) })

        return () => { active = false }
    }, [id, stateOrder])

    const order = stateOrder ?? (result.id === id ? result.order : null)
    const loading = !stateOrder && result.id !== id

    if (loading) {
        return <Cargando />
    }

    if (!order) {
        return (
            <section className="confirmacion">
                <h2>No encontramos este pedido</h2>
                <p>Revisá que el número de pedido sea correcto.</p>
                <Link className="confirmacion-boton" to="/">Volver al catálogo</Link>
            </section>
        )
    }

    return <OrderConfirmation order={order} />
}

export default OrderConfirmationContainer;
