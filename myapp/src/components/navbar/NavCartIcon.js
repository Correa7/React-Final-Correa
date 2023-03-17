import "./navbar.css";
import { useModal } from "../../hooks/useModal";
import Modal from "../modals/Modal";
import Cart from "../cart/Cart";

const NavCartIcon = ({ quantity }) => {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
 
  return (
    <div className="form-inline my-2 my-lg-0">
      <div className="cartContainer">
        <button className="nav-link" onClick={openModal1}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <Modal isOpen={isOpen1} closeModal={closeModal1}>
          <Cart />
        </Modal>
        <div className="cart-items">{ quantity === 0 ? <p></p> : quantity }</div>
      </div>
    </div>
  );
};

export default NavCartIcon; 
