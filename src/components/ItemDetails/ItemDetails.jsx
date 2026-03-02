import './ItemDetails.css'

function ItemDetailCard({ item }) {
    return (
        <div className="item-detail">

            <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="item-detail-img"
            />

            <h2 className="item-detail-title">
                {item.title}
            </h2>

            <p className="item-detail-description">
                {item.description}
            </p>
            <p className="item-detail-description">
                stock: {item.stock}
            </p>

            <h3 className="item-detail-price">
                ${item.price}
            </h3>

            <div className="item-detail-counter">
                {}
            </div>

            <button className="item-detail-btn">
                Agregar al carrito
            </button>

        </div>
    )
}

export default ItemDetailCard