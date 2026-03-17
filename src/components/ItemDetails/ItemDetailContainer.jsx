import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../firebase/database";
import ItemDetailCard from "./ItemDetailsCard";
import Cargando from "./Spinner";

function ItemDetailContainer() {
        const [item, setItems] = useState()
        const {id} =useParams()

        useEffect(() => {

            getProduct(id)
                .then(detail => setItems(detail))
        }, [id])

        if(!item){
            return(
                <Cargando />
            )
        }

    return(
        <ItemDetailCard item={item} />
    )
}

export default ItemDetailContainer;