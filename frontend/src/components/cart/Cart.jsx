import React from "react";
import { toast } from "react-toastify";
import { formatCurrency } from "../../utils/formatCurrency";
import TrashIcon from "../icon/TrashIcon";

const Cart = () => {
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
          onClick={() => {}}
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
      <div className="offcanvas-body">Body...</div>
      <hr />
      <div className="offcanvas-footer px-3">
        <div className="d-flex justify-content-between">
          <div>
            <h5>Total items:</h5>
            <h5>Total amount:</h5>
          </div>
          <div>
            <h5 style={{ textAlign: "right" }}>{10}</h5>
            <h5 className="text-right">{formatCurrency(1000)}</h5>
          </div>
        </div>

        <button
          type="button"
          className="btn bg-asset1 w-100 my-4 text-white"
          data-bs-dismiss="offcanvas"
          onClick={() => {
            toast.success("Your order is successfully completed.");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
