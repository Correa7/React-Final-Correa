import "./ItemDetail.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { toast, Slide } from 'react-toastify';


const ItemCount = ({ data }) => {
  const { addCart } = useContext(CartContext);
  const [click, setClick] = useState(1);

  const Add = () => {
    if (click < data.stock) {
      setClick(click + 1);
    }
  };

  const Remove = () => {
    if (click > 1) {
      setClick(click - 1);
    }
  };

  const addToCart = () => {
    addCart(data, click);

    toast.error('Producto agregado al Carrito!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition:Slide,
      icon:'🔴',
      });

  };

  return (
    <div className="click-container">
      <div className="click-button">
        <button className="nav-link" onClick={Add}>
          🔼
        </button>
        <h5 className="click-h5"> {click} </h5>
        <button className="nav-link" onClick={Remove}>
          🔽
        </button>
      </div>
      <button onClick={addToCart} className="btn btn-secondary me-md-2">
        Send to Cart
      </button>
    </div>
  );
};

export default ItemCount;
