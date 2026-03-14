import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import NavBarContainer from "../components/NavBar/NavBarContainer";
import ItemDetailContainer from "../components/ItemDetails/ItemDetailContainer";
import NotFount from "../components/NotFound";
import CartContainer from "../components/CartContainer/CartContainer";
import CheckoutContainer from "../components/Checkout/checkout";

function AppRouter(){
    return(
        <BrowserRouter>
        <NavBarContainer />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="/category/:categoryName" element={<ItemListContainer />} />
                <Route path="/checkout" element={<CheckoutContainer />} />
                <Route path="*" element={<NotFount/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;

