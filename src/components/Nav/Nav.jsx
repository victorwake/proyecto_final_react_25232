import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {

    const { getTotalItems } = useCartContext();

    return (
        <nav>
            <div className="nav-content">
                <div className="logo">
                    <Link to="/">CHOCHOLATE</Link>
                </div>

                <ul>
                    <li><Link to={"/"}> Inicio </Link></li>
                    <li><Link to={"/category/chocolate-amargo"}> Chocolate amargo </Link></li>
                    <li><Link to={"/category/chocolate-con-frutos-secos"}> Chocolate con rutos secos</Link></li>
                    <li><Link to={"/category/chocolate-blanco"}> Chocolate blanco </Link></li>
                    <li><Link to={"/category/relleno-frutal"}> Relleno frutal </Link></li>
                    <li>
                        <Link to={"/carrito"}> 🛒 Carrito </Link>
                        { getTotalItems() > 0 && ( <span className="in-cart"> { getTotalItems() } </span> )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};
