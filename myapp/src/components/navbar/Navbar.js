import "./navbar.css";
import CartIcon from "./NavCartIcon";
import NavLogo from "./NavLogo";
import Logo from "../../img/logo.png";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.unidades;
  }, 0);

  const categoria = { 
    pintura: "Pintura",
    dibujo: "Dibujo",
    escultura: "Escultura",
    grabado: "Grabado",
  };

  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLogo src={Logo} alt={"Jasmina-Logo"} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="ul" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/${categoria.pintura}`}
                className="nav-link"
              >
                Pinturas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/${categoria.escultura}`}
                className="nav-link"
              >
                Esculturas{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/${categoria.dibujo}`}
                className="nav-link"
              >
                Dibujos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/${categoria.grabado}`}
                className="nav-link"
              >
                Grabados
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="cartContainer">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <CartIcon cantidad={cantidad} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
