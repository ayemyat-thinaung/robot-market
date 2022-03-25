export const removeItem = (items, id) => {
  return items.filter((item) => item.id !== id);
};

export const addItemWithQuantity = (items, item, quantity) => {
  if (quantity <= 0)
    throw new Error("Cart Quantity can't be zero or less than zero.");

  const existingItemIndex = items.findIndex(
    (existingItem) => existingItem?.id === item?.id
  );

  if (existingItemIndex > -1) {
    const newItems = [...items];
    newItems[existingItemIndex].quantity += quantity;
    // console.log("text", newItems);

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
