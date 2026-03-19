import ''



function Checkout({ handleSubmit }){
    return(
        <div className='contenedor-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre' >Nombre</label>
                <input id='nombre' type="text" name="nombre" placeholder="Ingrese su nombre" className='campo' required />

                <label htmlFor='email' >Email</label>
                <input id='email' type="text" name="email" placeholder="Ingrese su correo" className='campo' required />

                <label htmlFor='direccion' >Dirección</label>
                <input id='direccion' type="text" name="direccion" placeholder="Ingrese su dirección" className='campo' required />

                <label htmlFor='telefono' >Telefono</label>
                <input id='telefono' type="text" name="telefono" placeholder="Ingrese su numero de telefono" className='campo' required />

                <input type="submit" name="enviar" value="Finalizar compra" className='enviar' />
            </form>

        </div>
    )
}

export default Checkout;
