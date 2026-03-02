import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import NavBarContainer from "../components/NavBar/NavBarContainer";
import NotFount from "../components/NotFount";

function AppRouter(){
    return(
        <BrowserRouter>
        <NavBarContainer />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryName" element={<ItemListContainer />} />
                <Route path="*" element={<NotFount />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;

