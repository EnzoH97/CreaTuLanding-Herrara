import './Checkout.css'

function CheckoutContainer(){
    return(
        <div className='contenedor-form'>
            <form>
                <label form='nombre' >Nombre</label>
                <input type="text" name="nombre" placeholder="Ingrese su nombre" className='campo'/>

                <label form='email' >Email</label>
                <input type="text" name="email" placeholder="Ingrese su correo" className='campo' />

                <label form='direccion' >Dirección</label>
                <input type="text" name="direccion" placeholder="Ingrese su dirección" className='campo' />

                <label form='telefono' >Telefono</label>
                <input type="text" name="telefono" placeholder="Ingrese su numero de telefono" className='campo' />

                <input type="submit" name="enviar" value="Finalizar compra" className='enviar' />
            </form>

        </div>
    )
}

export default CheckoutContainer;
