import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Cart.css"

export const Cart = () => {
    const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

    return (
        <section className="cart-container">
            <h2> Carrito de Compras </h2>

            {cart.length ? (
                cart.map((prod) => (
                    <article className="cart-item">
                        <img className="cart-item-img" src={prod.imageUrl} alt={prod.description} />

                        <div className="cart-item-info">
                            <h3>{prod.name}</h3>
                            <p>Precio: ${prod.price}</p>
                            <span>Cantidad: {prod.quantity}</span>
                        </div>

                        <div className="cart-item-actions">
                            <button className="cart-btn" onClick={() => deleteItem(prod.id)}>
                                Eliminar
                            </button>
                        </div>
                    </article>
                ))
            ) : (
                <p className="empty-cart">Tu carrito está vacío</p>
            )}

            {cart.length ? (
               <div className="cart-summary">
                    <p className="cart-summary-total">Total a pagar: ${total()}</p>

                    <button className="cart-btn" onClick={checkout}>Finalizar compra</button>
                    <button className="cart-btn" onClick={clearCart}>Vaciar carrito</button>
                </div>
            ) : (
                <Link className="cart-btn" to="/"> Volver al inicio </Link>
            )}

        </section>
    );
};