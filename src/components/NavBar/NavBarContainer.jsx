import { useState,useEffect } from "react";
import { getCategories } from "../../firebase/database";
import NavBar from "./NavBar";

function NavBarContainer() {
    const [categories, setCategories] = useState([])
    
    useEffect(() =>{
/*         fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCategories(data)); */

    getCategories()
        .then(cats => setCategories(cats))
    },[])
    
    return(
        <NavBar categories={categories} />
    )
}

export default NavBarContainer;