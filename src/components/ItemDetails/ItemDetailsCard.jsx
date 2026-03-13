import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function ItemDetailCard({ item }) {
    const { AddItem } = useContext(CartContext);

    return (
        <div className="item-detail">
            <img src={item.thumbnail} alt={item.title} className="item-detail-img"/>

            <h2 className="item-detail-title"> {item.title} </h2>

            <p className="item-detail-description"> {item.description} </p>

            <h3 className="item-detail-price"> ${item.price} </h3>

            <div className="item-detail-counter">
                <ItemCount item={item} />
            </div>

        </div>
    )
}

export default ItemDetailCard