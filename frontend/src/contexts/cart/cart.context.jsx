import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import useSessionStorage from "../../hooks/useSessionStorage";
import { cartReducer, initialState } from "./cart.reducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useSessionStorage(
    "robot-cart",
    JSON.stringify(initialState)
  );

  const [state, dispatch] = useReducer(cartReducer, JSON.parse(cart));

  useEffect(() => {
    if (JSON.stringify(state)) {
      setCart(JSON.stringify(state));
    }
  }, [state, setCart]);

  const addItemToCart = (item, quantity) =>
    dispatch({ type: "ADD_ITEM_QUANTITY", item, quantity });

  const decreaseItemQuantity = (id, quantity) =>
    dispatch({ type: "DECREASE_ITEM_QUANTITY", id, quantity });

  const clearItemFromCart = (id) =>
    dispatch({ type: "CLEAR_ITEM_FROM_CART", id });

  const resetCart = () => dispatch({ type: "RESET_CART" });

  const getItemFromCart = useCallback(
    (id) => state.items.find((item) => item.id === id),
    [state.items]
  );

  const isInCart = useCallback(
    (id) => !!state.items.find((item) => item.id === id),
    [state.items]
  );

  const value = useMemo(
    () => ({
      ...state,
      addItemToCart,
      decreaseItemQuantity,
      clearItemFromCart,
      getItemFromCart,
      resetCart,
      isInCart,
    }),
    [state, getItemFromCart, isInCart]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
};

export { CartContext, CartContextProvider, useCart };
