import { useState } from "react"
import './ItemCount.css'

function ItemCount() {
    const [count, setCount] = useState(1)

    const sumar = () => setCount(count + 1)
    const restar = () => setCount(count > 0 ? count - 1 : 0)


    return(
        <div className='item-botones'>
            <p> {count} </p>
            <button className='sumar-item' onClick={sumar} > + </button>
            <button className='restar-item' onClick={restar} > - </button>
        </div>
    )
    
}

export default ItemCount;