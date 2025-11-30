import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products";


export const ItemDetailContainer = () => {
    const [ detail, setDetail ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState("");

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError("");
        setDetail({});
        getProductById(id)
            .then((detail) => setDetail(detail))
            .catch((e) => {
                setError(e?.message || "Error al obtener el producto");
            })
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <main className="item-detail-container">
            {loading && <p className="loading-message"> Cargando ... </p>}
            {!loading && error && <p className="loading-message"> {error.includes("status 404") ? "Producto no encontrado" : error} </p>}
            {!loading && !error && Object.keys(detail).length > 0 && <ItemDetail detail={detail} />}
        </main>
    );
}