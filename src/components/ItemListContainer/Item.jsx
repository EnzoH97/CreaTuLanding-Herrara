

function Item({ item }){
    return(
            <div className="card">

                <div className="card-img">
                    {/* <img src="" alt={item.nombre} /> */}
                </div>

                <div className="info-card">
                    <h2>{item.nombre}</h2>
                    <p>{item.descripcion}</p>
                </div>

                <div className="footer-card">
                    <p>${item.precio}</p>
                </div>

            </div>
    )
}

export default Item;