import "./modal.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Modal = ({ children, isOpen, closeModal }) => {
  const { cart, clearCart } = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.unidades;
  }, 0);
  const total = cart.reduce((acc, curr) => {
    return acc + curr.subtotal;
  }, 0);

  const modalContainerClick = (e) => e.stopPropagation();

  if (cart.length === 0) {
    return (
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={modalContainerClick}>
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
          
            <button className="btn">Finalizar Compra</button>
            <h6>
              <strong>Items: {cantidad} </strong>
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
