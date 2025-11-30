import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
            .then((data) => setProducts(data))
            .catch((error) => {
                console.log(error)
            });
    }, [category])


    return (
        <section className="item-list-container"> 
            <div>
                <ItemList list={products} />
            </div>
        </section>
    );
}