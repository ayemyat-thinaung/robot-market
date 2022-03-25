import React from "react";
import MinusIcon from "../icon/MinusIcon";
import PlusIcon from "../icon/PlusIcon";

const CounterButton = ({
  onDecrement,
  onIncrement,
  decrementDisabled,
  incrementDisabled,
  quantity,
}) => (
  <div className="d-flex justify-content-center align-items-center w-100 ">
    <button
      disabled={decrementDisabled}
      type="button"
      className={`${decrementDisabled && "disabled"} btn btn-light`}
      onClick={onDecrement}
    >
      <PlusIcon />
    </button>
    <span className="px-4">{quantity}</span>
    <button
      // data-bs-toggle={incrementDisabled && "tooltip"}
      // data-bs-placement="bottom"
      // title="No more stock!"
      disabled={incrementDisabled}
      type="button"
      className={`${incrementDisabled && "disabled"} btn btn-light`}
      onClick={onIncrement}
      // className="d-flex align-items-center"
    >
      <MinusIcon />
    </button>
  </div>
);

export default CounterButton;