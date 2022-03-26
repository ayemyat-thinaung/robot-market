import {
  addItemWithQuantity,
  decreaseItemQuantity,
  removeItem,
} from "./cart.action";

const initialState = {
  items: [],
  isEmptyCart: true,
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_QUANTITY": {
      const items = addItemWithQuantity(
        state.items,
        action.item,
        action.quantity
      );
      return generateFinalState(state, items);
    }

    case "DECREASE_ITEM_QUANTITY": {
      const items = decreaseItemQuantity(
        state.items,
        action.id,
        (action.quantity = 1)
      );
      return generateFinalState(state, items);
    }

    case "CLEAR_ITEM_FROM_CART": {
      const items = removeItem(state.items, action.id);
      return generateFinalState(state, items);
    }

    case "RESET_CART":
      return initialState;

    default:
      return state;
  }
};

const generateFinalState = (state, items) => {
  return {
    ...state,
    items,
    isEmptyCart: items?.length === 0,
    totalItems: items.reduce((sum, val) => {
      return sum + val?.quantity;
    }, 0),
    totalPrice: items.reduce((sum, val) => {
      return sum + val?.price * val?.quantity;
    }, 0),
  };
};

export { initialState, cartReducer };
