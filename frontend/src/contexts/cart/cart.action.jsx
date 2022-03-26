import _ from "lodash";

export const removeItem = (items, id) => {
  return items.filter((item) => item.id !== id);
};

export const addItemWithQuantity = (items, item, quantity) => {
  if (quantity <= 0)
    throw new Error("Cart Quantity can't be zero or less than zero.");

  let serializedItems = _.keyBy(items, "id");
  const existingItem = serializedItems[item?.id];

  if (existingItem) {
    serializedItems = {
      ...serializedItems,
      [item.id]: {
        ...existingItem,
        quantity: existingItem?.quantity + 1,
      },
    };
    const newItems = _.sortBy(serializedItems, "key");
    return newItems;
  }

  return [...items, { ...item, quantity }];
};

export const decreaseItemQuantity = (items, id, quantity) => {
  return items.reduce((acc, item) => {
    if (item.id === id) {
      const newQuantity = item.quantity - quantity;

      return newQuantity > 0
        ? [...acc, { ...item, quantity: newQuantity }]
        : [...acc];
    }
    return [...acc, item];
  }, []);
};
