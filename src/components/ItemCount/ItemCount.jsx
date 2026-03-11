import { useState,useContext } from "react"
import AddButton from "../Buttons/AddButton"
import SubtractButton from "../Buttons/SubtractButton"
import AddToCart from "../Buttons/AddToCart";
import { CartContext } from "../../context/CartContext";


function ItemCount({ item }) { 
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(1);

    const sumar = () => {
        setCount(count + 1);
    };
    
    const restar = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleOnAdd = () => {
        addItem({ ...item, count });
    };

    return(
        <div className='item-botones'>
            <p> {count} </p>
            <div className="btnContainer">
                <AddButton sumar={sumar} />
                <SubtractButton restar={restar} />
            </div>
            <AddToCart  handleOnAdd={handleOnAdd} />
        </div>
    )
}
export default ItemCount;
