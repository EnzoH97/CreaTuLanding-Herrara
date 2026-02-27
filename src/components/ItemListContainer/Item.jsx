

function Item({ item }){
    return(
            <div className="card">

                <div className="card-img">
                    { <img src={item.thumbnail} alt={item.title} /> }
                </div>

                <div className="info-card">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>stock: {item.stock}</p>
                </div>

                <div className="footer-card">
                    <p>${item.price}</p>
                </div>

            </div>
    )
}

export default Item;