import React from "react";
import { toast } from "react-toastify";
import { useCart } from "../../contexts/cart/cart.context";
import CounterButton from "./CounterButton";

const AddToCartButton = ({ item }) => {
  const { addItemToCart, getItemFromCart, decreaseItemQuantity, isInCart } =
    useCart();

  return (
    <>
      {!isInCart(item?.id) ? (
        <button
          type="button"
          className={`${
            !item?.stock && "disabled"
          } btn bg-asset1 w-100 text-white`}
          disabled={!item?.stock}
          onClick={() => {
            addItemToCart(item, 1);
            toast.success("One item is added to the cart.");
          }}
        >
          ADD TO CART
        </button>
      ) : (
        <CounterButton
          quantity={getItemFromCart(item.id)?.quantity}
          // decrementDisabled={getItemFromCart(item.id)?.quantity === 1}
          incrementDisabled={getItemFromCart(item.id)?.quantity >= item?.stock}
          onDecrement={() => {
            decreaseItemQuantity(item.id);
            toast.success("One item is removed from the cart.");
          }}
          onIncrement={() => {
            addItemToCart(item, 1);
            toast.success("One item is added to the cart.");
          }}
        />
      )}
    </>
  );
};

export default AddToCartButton;
