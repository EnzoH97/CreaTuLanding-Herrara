import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import NavBarContainer from "../components/NavBar/NavBarContainer";
import ItemDetailContainer from "../components/ItemDetails/ItemDetailContainer";
import NotFount from "../components/NotFount";

function AppRouter(){
    return(
        <BrowserRouter>
        <NavBarContainer />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:categoryName" element={<ItemListContainer />} />
                <Route path="*" element={<NotFount />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;

