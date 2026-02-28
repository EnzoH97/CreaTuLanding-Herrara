import { useState, useEffect } from 'react';
import ItemList from './ItemList';


function ItemListContainer() {
    const [items, setItems] = useState ([])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=40')
            .then(res => res.json())
            .then(data => setItems(data.products));
    },[])

    return (
        <ItemList items={items}/>
    )
}
export default ItemListContainer;
