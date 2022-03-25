import React from "react";
import { toast } from "react-toastify";
import { useCart } from "../../contexts/cart/cart.context";
import { formatCurrency } from "../../utils/formatCurrency";
import TrashIcon from "../icon/TrashIcon";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, resetCart, totalItems, totalPrice, isEmptyCart } = useCart();

  return (
    <div
      className="offcanvas offcanvas-end "
      tabIndex="-1"
      data-bs-scroll="true"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header ">
        <h5 className="mb-0">Shopping Cart</h5>

        <button
          type="button"
          onClick={() => resetCart()}
          className="btn btn-light text-danger"
          data-bs-dismiss="offcanvas"
          aria-label="Clear All"
        >
          <TrashIcon />
          Clear All
        </button>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <hr />
      <div className="offcanvas-body">
        {items?.map((item) => (
          <CartItem item={item} key={item?.id} />
        ))}
      </div>
      <hr />
      <div className="offcanvas-footer px-3">
        <div className="d-flex justify-content-between">
          <div>
            <h5>Total items:</h5>
            <h5>Total amount:</h5>
          </div>
          <div>
            <h5 style={{ textAlign: "right" }}>{totalItems || 0}</h5>
            <h5 className="text-right">{formatCurrency(totalPrice)}</h5>
          </div>
        </div>
        {items?.length > 5 && (
          <div
            className="alert alert-warning alert-dismissible fade show my-2"
            role="alert"
          >
            <strong>Dear Customer!</strong> You can add up to 5 different robots
            to cart.
            {/* <button
              type="button"
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="alert"
            /> */}
          </div>
        )}
        <button
          type="button"
          className={`${
            items?.length > 5 ? "disabled " : "cursor-pointer"
          } btn bg-asset1 w-100 my-4 text-white`}
          data-bs-dismiss="offcanvas"
          disabled={items?.length > 5 || isEmptyCart}
          onClick={() => {
            toast.success("Your order is successfully completed.");
            resetCart();
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
