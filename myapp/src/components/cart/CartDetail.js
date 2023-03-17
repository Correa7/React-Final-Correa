import "./cart.css";
import Up from "../../img/arrow-up.png";
import Down from "../../img/arrow-down.png";
import Garbage from "../../img/garbage.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartDetail = ({ prod }) => {
  const { addCart, deleteItem } = useContext(CartContext);
  const { quantity, stock, id } = prod;

  const addItem = () => {
    let newItem = quantity + 1;

    if (quantity >= stock) {
      addCart(prod, stock);
    } else {
      addCart(prod, newItem);
    }
  };

  const subtractItem = () => {
    let newItem = quantity - 1;
    addCart(prod, newItem);
    if (quantity <= 1) {
      deleteItem(id);
    } else {
      addCart(prod, newItem);
    }
  };

  const delItem = () => {
    deleteItem(id);
  };

  return (
    <div className="cart-row">
      <div style={{ flex: "1" }}>
        <img className="row-image" src={prod.url} alt={prod.title} />
      </div>
      <div style={{ flex: "1" }}>
        <p className="cart-p">{prod.title}</p>
      </div>
      <div style={{ flex: "1" }}>
        <p className="cart-p">${prod.price}</p>
      </div>
      <div style={{ flex: "2" }}>
        <p className="quantity">{prod.quantity}</p>
        <div className="quantity">
          <img
            onClick={addItem}
            className="chg-quantity update-cart "
            src={Up}
            alt="arrow-up"
          />
          <img
            onClick={subtractItem}
            className="chg-quantity update-cart "
            src={Down}
            alt="arrow-down"
          />
        </div>
      </div>
      <div style={{ flex: "1" }}>
        <p className="cart-p">${prod.subtotal}</p>
      </div>
      <div style={{ flex: "1" }}>
        <img
          className="garbage"
          onClick={delItem}
          src={Garbage}
          alt="garbage"
        />
      </div>
    </div>
  );
};
