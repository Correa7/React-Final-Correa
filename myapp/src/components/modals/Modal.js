import "./modal.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Modal = ({ children, isOpen, closeModal }) => {
  const { cart, clearCart, quantity, total } = useContext(CartContext);

  const modalContainerClick = (e) => e.stopPropagation();

  if (cart.length === 0) { 
    return (
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container">
          <div className="div-btn2">
            <button className="btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
          <div className="children">{children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={modalContainerClick}>
          <div className="div-btn">
            <Link
              className="btn btn-secondary"
              to="/checkout"
              onClick={closeModal}
            >
              Finalizar Compra
            </Link>
            <h6>
              <strong>Items: {quantity} </strong>
            </h6>
            <h6>
              <strong>Total: {total} </strong>
            </h6>
            <button className="btn" onClick={clearCart}>
              Vaciar
            </button>
            <button className="btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
          <div className="children">{children}</div>
        </div>
      </div>
    );
  }
};
export default Modal;
