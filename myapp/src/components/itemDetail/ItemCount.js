import "./ItemDetail.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ data }) => {
  const { addCart } = useContext(CartContext);
  const [click, pulsar] = useState(1);

  const Sumar = () => {
    if (click < data.stock) {
      pulsar(click + 1);
    }
  };

  const Restar = () => {
    if (click > 1) {
      pulsar(click - 1);
    }
  };

  const addToCart = () => {
    addCart(data, click);
  };

  return (
    <div className="click-container">
      <div className="click-button">
        <button className="nav-link" onClick={Sumar}>
          🔼
        </button>
        <h5 className="click-h5"> {click} </h5>
        <button className="nav-link" onClick={Restar}>
          🔽
        </button>
      </div>
      <button onClick={addToCart} className="btn btn-secondary me-md-2">
        Send Cart
      </button>
    </div>
  );
};

export default ItemCount;
