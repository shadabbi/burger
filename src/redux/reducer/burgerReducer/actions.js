export const setIngredients = (ingredients) => {
  return {
    type: "setIngredients",
    payload: ingredients,
  };
};
export const setTotalPrice = (totalPrice) => {
  return {
    type: "setTotalPrice",
    payload: totalPrice,
  };
};
