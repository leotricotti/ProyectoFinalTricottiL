import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      setCartArray(
        cartArray.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        })
      );
    } else {
      setCartArray([...cartArray, { ...product, quantity }]);
    }
  };

  const deleteItem = (id) => {
    const updateCart = cartArray.filter((element) => element.id !== id);
    setCartArray(updateCart);
  };

  const clearCart = () => {
    setCartArray([]);
  };

  const isInCart = (id) => {
    return cartArray.some((element) => element.id === id);
  };

  const totalCart = () => {
    return cartArray.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const cartItems = () => {
    return cartArray.reduce(
      (accum, actualProduct) => accum + actualProduct.quantity,
      0
    );
  };

  const value = {
    addToCart,
    deleteItem,
    clearCart,
    totalCart,
    cartItems,
    cartArray,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
