
import ItemWithLowStock from './ItemWithLowStock';


function ItemList({ items }){
    return(
    <div className="contenedor-cards">
        {items.map(item => <ItemWithLowStock item={item} key={item.id}/>)}
    </div>
    )
}

export default ItemList;