import "./navbar.css";
import NavCartIcon from "./NavCartIcon";
import NavLogo from "./NavLogo";
import Logo from "../../img/logo.png";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const { quantity } = useContext(CartContext);

  const category = {
    pintura: "Pintura",
    dibujo: "Dibujo",
    escultura: "Escultura",
    grabado: "Grabado",
  };

  return (
  
      <nav className="navbar">
        <NavLogo src={Logo} alt={"Jasmina-Logo"} />
        <div id="ul">
          <ul className="nav-ul">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/${category.pintura}`}
                className="nav-link"
              >
                Pinturas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/${category.escultura}`}
                className="nav-link"
              >
                Esculturas{" "}
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink
                to={`/categoria/${category.dibujo}`}
                className="nav-link"
              >
                Dibujos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/${category.grabado}`}
                className="nav-link"
              >
                Grabados
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="cartContainer">
          <div>
            <ul className="nav-ul">
              <NavCartIcon quantity={quantity} />
            </ul>
          </div> 
        </div>
      </nav>
  );
};
export default NavBar;
