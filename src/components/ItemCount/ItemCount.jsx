import { useState } from "react"
import AddButton from "../Buttons/AddButton"
import SubtractButton from "../Buttons/SubtractButton"



function ItemCount({ stock }) { 
    const [count, setCount] = useState(1);

    const sumar = () => {
        if (count < stock) setCount(count + 1);
    };
    
    const restar = () => {
        if (count > 1) setCount(count - 1);
    };

    return(
        <div className='item-botones'>
            <p> {count} </p>
            <AddButton sumar={sumar} />
            <SubtractButton restar={restar} />
        </div>
    )
    
}

export default ItemCount;
