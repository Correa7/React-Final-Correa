import React, { useState } from "react";

const CartContext = React.createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (Item, newCantidad) => {
    let newCart = cart.filter((prod) => prod.id !== Item.id);
    newCart.push({
      ...Item,
      quantity: newCantidad,
      subtotal: Item.price * newCantidad,
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const total = cart.reduce((acc, curr) => {
    return acc + curr.subtotal;
  }, 0);
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addCart,
          clearCart,
          deleteItem,
          quantity,
          total,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export { CartContext, CartContextProvider };
