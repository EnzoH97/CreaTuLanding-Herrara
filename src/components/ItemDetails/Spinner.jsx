import Spinner from 'react-bootstrap/Spinner';
import './ItemDetails.css'

function Cargando() {
    return (
        <div className='loading'>
            <Spinner animation="border" />
        </div>
    ) 

}

export default Cargando;