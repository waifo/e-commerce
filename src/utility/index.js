export const addItemToCart = (cartItems, itemToAdd) => {
  const exisitingItem = cartItems.find(item => item.id === itemToAdd.id);

  if (exisitingItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const exisitingItem = cartItems.find(item => item.id === itemToRemove.id);

  if (exisitingItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter(item => item.id !== itemToClear.id);
};
