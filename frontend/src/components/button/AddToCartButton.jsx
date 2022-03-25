import React from "react";
import { toast } from "react-toastify";

const AddToCartButton = ({ item }) => {
  return (
    <>
      <button
        type="button"
        className={`${
          !item?.stock && "disabled"
        } btn bg-asset1 w-100 text-white`}
        disabled={!item?.stock}
        onClick={() => {
          toast.success("One item is added to the cart.");
        }}
      >
        ADD TO CART
      </button>
    </>
  );
};

export default AddToCartButton;
