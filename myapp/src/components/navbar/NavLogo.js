import "./navbar.css";
import { Link } from "react-router-dom";

const NavLogo = ({ src, alt }) => {
  return (
    <>
      <Link to={"/"}>
        <img className="logo" src={src} alt={alt} />
      </Link>
    </>
  );
};

export default NavLogo;
