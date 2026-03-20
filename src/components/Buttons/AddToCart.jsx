

function AddToCart({ handleOnAdd }){

    return(
        <button className="item-detail-btn" onClick={handleOnAdd}>
            Agregar al carrito
        </button>
    )
}

export default AddToCart;