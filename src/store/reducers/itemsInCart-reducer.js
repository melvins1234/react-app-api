const itemsInCart = (state = 0, action) => {
  switch (action.type) {
    case "count-items-in-cart":
      return action.payload;
    default:
      return state;
  }
};

export default itemsInCart;
