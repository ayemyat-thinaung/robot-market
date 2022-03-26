import React from "react";
import { useCart } from "../../contexts/cart/cart.context";
import { formatCurrency } from "../../utils/formatCurrency";
import CounterButton from "../button/CounterButton";
import TrashIcon from "../icon/TrashIcon";

const CartItem = ({ item }) => {
  const { clearItemFromCart, decreaseItemQuantity, addItemToCart } = useCart();

  return (
    <div className="d-flex justify-content-between py-2">
      <div className="d-flex">
        <img
          src={item?.image}
          alt={item?.name}
          width={80}
          height={80}
          className="img-thumbnail"
        />

        <div className="px-2">
          <h6 className="mb-0">{item?.name}</h6>
          <div className="text-secondary">{`Stock - ${item?.stock} Left`}</div>
          <CounterButton
            onDecrement={() => decreaseItemQuantity(item.id)}
            onIncrement={() => {
              addItemToCart(item, 1);
            }}
            quantity={item?.quantity}
            incrementDisabled={item?.quantity >= item?.stock}
          />
        </div>
      </div>

      <div>
        <h6 className="text-right">
          {formatCurrency(item?.price * item?.quantity)}
        </h6>
        <div className="d-flex justify-content-center">
          <button
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Remove Item"
            type="button"
            className="btn btn-gradient"
            aria-label="Remove Item"
            onClick={() => clearItemFromCart(item?.id)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
