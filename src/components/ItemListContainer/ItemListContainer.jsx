import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';


function ItemListContainer() {
    const [items, setItems] = useState ([])
    const {categoryName} = useParams()

    useEffect(() => {

        const UrlBase = 'https://dummyjson.com/products';
        const UrlFinal = categoryName ? `${UrlBase}/category/${categoryName}` : `${UrlBase}?limit=40`;

    fetch(UrlFinal)
        .then(res => res.json())
        .then(data => setItems(data.products))

}, [categoryName])
    return (
        <ItemList items={items}/>
    )
}
export default ItemListContainer;
