import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartDetail } from "./CartDetail";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return cart.length === 0 ? (
    <div className="empty">
      <h5>No hay Items en el Carrito</h5>
    </div>
  ) : (
    <div>
      <div className="col-lg-12">
        <div className="box-element-2">
          <div className="cart-row">
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Image</strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Item</strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Price</strong>
            </div>
            <div className="tabla" style={{ flex: "2" }}>
              <strong>Quant</strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>Total</strong>
            </div>
            <div className="tabla" style={{ flex: "1" }}>
              <strong>DelItem</strong>
            </div>
          </div>
          {cart
            .sort((x, y) => x.num - y.num)
            .map((prod) => (
              <div key={prod.id}>
                <CartDetail prod={prod} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;
