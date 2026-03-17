import Spinner from 'react-bootstrap/Spinner';
import './itemDetails.css'

function Cargando() {
    return (
        <div className='loading'>
            <Spinner animation="border" />
        </div>
    ) 

}

export default Cargando;