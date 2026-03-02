import '../components/ItemListContainer/ItemListContainer.css'

const withLowStock = (Component) => {
    function ComponentWithLowSotck(props){

        const lowStock = props.item.stock < 20;

        return(
        <div className={lowStock ? "low-stock" : ""}>
            <Component {... props}/>
        </div>
        )
    }
    return ComponentWithLowSotck
}

export default withLowStock;
