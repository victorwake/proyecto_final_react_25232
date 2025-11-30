import "./ItemList.css"
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        <div className="item-list-grid">
          {list.map((product) => (
            <Link to={`/detail/${product.id}`} key={product.id}>
              <Item {...product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="item-list-empty"> No hay productos </p>
      )}
    </>
  )
}
