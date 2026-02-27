import Item from "./Item";
import withLowStock from "../../hocs/withLowStock";

const ItemWithLowStock = withLowStock(Item)

export default ItemWithLowStock;
