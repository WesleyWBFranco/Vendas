import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd, quantity = 1) => {
    const checkItemAlready = cartItems.find((cartItem) => {
      return cartItem._id === itemToAdd._id;
    });

    if (!checkItemAlready) {
      setCartItems([...cartItems, { ...itemToAdd, quantity }]);
      console.log('Item added correctly');
    } else {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === itemToAdd._id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      console.log('Item quantity updated');
    }
  };

  const removeFromCart = (itemId) => {
    const cartItemsSanitized = cartItems.filter((item) => {
      return item._id !== itemId;
    });
    setCartItems(cartItemsSanitized);
  };

  const updateCartItems = (items) => {
    setCartItems(items);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        removeFromCart,
        addToCart,
        cartItems,
        updateCartItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.log('you are out of CartContext');
  }

  return context;
};