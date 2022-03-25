import { createContext, useContext } from "react";
import useSessionStorage from "../../hooks/useSessionStorage";

const initialState = {
  items: [],
  isEmptyCart: true,
  totalItems: 0,
  totalPrice: 0,
};

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useSessionStorage(
    "robot-cart",
    JSON.stringify(initialState)
  );

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
};

export { CartContext, CartContextProvider, useCart };
