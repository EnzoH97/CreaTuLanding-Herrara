import '../components/ItemListContainer/ItemListContainer.css'

const withLowStock = (Component) => {
    function ComponentWithLowStock(props){

        const lowStock = props.item.stock < 20;

        return(
        <div className={lowStock ? "low-stock" : ""}>
            <Component {... props}/>
        </div>
        )
    }
    return ComponentWithLowStock
}

export default withLowStock;
