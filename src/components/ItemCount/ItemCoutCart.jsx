import { useState,useContext } from "react"
import AddButton from "../Buttons/AddButton"
import SubtractButton from "../Buttons/SubtractButton"
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

function ItemCountCart({ item }){
    const { updateQuantity, removeItem } = useContext(CartContext);
    const [count, setCount] = useState(item.count);
    
        const sumar = () => {
            const nuevoContador = count +1;
            setCount(nuevoContador);

            updateQuantity(item.id, nuevoContador);
        };
        
        const restar = () => {
            const nuevoContador = count -1;
            if (count == 0 ) {
                removeItem(item.id)
                toast.error("Producto eliminado del carrito");
            }else{
                setCount(nuevoContador);
                updateQuantity(item.id, nuevoContador);
            }
        };

        return(
            <div className='item-botones'>
                <div className="btnContainer">
                    <SubtractButton restar={restar} />
                    <AddButton sumar={sumar} />
                </div>
            </div>
        )
}

export default ItemCountCart;
