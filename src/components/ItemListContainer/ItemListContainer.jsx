import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const productos = [
    {
        id: 1,
        nombre: "Promo 1",
        precio: 1100,
        descripcion: "Café o café con leche + tortita o factura"
    },
    {
        id: 2,
        nombre: "Promo 2",
        precio: 1700,
        descripcion: "Café/café con leche + tortita/factura + jugo natural"
    },
    {
        id: 3,
        nombre: "Cafe",
        precio: 800,
        descripcion: "Vaso de cafe mediano"
    },
    {
        id: 4,
        nombre: "Cafe con leche",
        precio: 1000,
        descripcion: "Vaso de cafe con leche mediano"
    },
    {
        id: 5,
        nombre: "Jugo de naranja",
        precio: 700,
        descripcion: "Vaso de jugo de naranja natural"
    },
    {
        id: 6,
        nombre: "Tortitas",
        precio: 350,
        descripcion: "Tortitas caseras a elección"
    },
    {
        id: 7,
        nombre: "Facturas",
        precio: 450,
        descripcion: "Facturas caseras a elección"
    },
    {
        id: 8,
        nombre: "Churros",
        precio: 1000,
        descripcion: "Churros rellenos de dulce de leche o chocolate"
    },
    {
        id: 9,
        nombre: "Donas",
        precio: 1000,
        descripcion: "Donas glaseadas o rellenas a elección"
    },
    {
        id: 10,
        nombre: "Magdalena",
        precio: 600,
        descripcion: "Magdalenas rellena o glaseada a elección"
    },
    {
        id: 11,
        nombre: "Waffles",
        precio: 1200,
        descripcion: "Waffles dulces a elección"
    },
    {
        id: 12,
        nombre: "Sandwich de miga",
        precio: 500,
        descripcion: "Sandwich de miga a elección"
    }
];

function ItemListContainer() {
    const [items, setItems] = useState ([])

    useEffect(() => {
        const getItems = () => new Promise((res, rej) => {
            setTimeout(() => {
                res(productos)
            },3000)
        })
        getItems().then(data => setItems(data))
    },[])

    return (
        <ItemList items={items}/>
    )
}
export default ItemListContainer;
