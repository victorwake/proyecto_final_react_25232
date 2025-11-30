import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count"

export const ItemDetail = ({ detail }) => {

    const { addItem } = useCartContext();
    
    const handleAdd = (quantity) => {
        addItem({ ...detail, quantity })
    }

    return (
        <Item {...detail}>
            {/* <button onClick={() => addItem(detail)}> Enviar al Carrito </button>  */}
            <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
        </Item>
    );
};