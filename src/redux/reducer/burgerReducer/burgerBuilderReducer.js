const INIT_STATE = {
  ingredients: null,
  totalPrice: 20,
};

const burgerBuilderReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "setIngredients":
      return {
        ...state,
        ingredients: action.payload,
      };

    case "setTotalPrice":
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
};

export default burgerBuilderReducer;
