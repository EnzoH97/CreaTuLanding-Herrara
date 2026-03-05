
import Item from './Item'


function ItemList({ items }){
    return(
    <div className="contenedor-cards">
        {items.map(item => (<Item item={item} key={item.id} />))}
    </div>
    )
}

export default ItemList;
