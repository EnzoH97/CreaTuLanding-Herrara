import { useNavigate } from "react-router";
import './ItemListContainer.css'

function Item({ item }){
    const navigate = useNavigate()

    const isLowStock = item.stock < 20;

    return(
        <div className= 'card'>
                <div className='card-img'>
                    { <img src={item.thumbnail} alt={item.title} /> }
                </div>

                <div className='info-card'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>

                <div className='footer-card'>
                    <p>${item.price}</p>
                    <div className='card-button'>
                        <button onClick={()=> navigate(`/item/${item.id}`)}>ver más</button>
                    </div>
                </div>
        </div>
    )
}

export default Item;

