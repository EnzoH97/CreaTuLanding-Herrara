import './Buttonstyles.css'


function AddButton({ sumar }){

    return(
        <>
        <button className='sumar-item' onClick={sumar} > + </button>
        </>
    )
}

export default AddButton;

