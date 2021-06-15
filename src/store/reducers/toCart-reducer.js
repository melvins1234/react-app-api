const Cart = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      let isExisted = state.find((e) => e.datatest === action.payload.datatest);
      let isExistedIndex = state.findIndex(
        (e) => e.datatest === action.payload.datatest
      );
      if (isExisted) {
        state.splice(isExistedIndex, 1);
        let cartList = [
          ...state,
          { ...isExisted, quantity: isExisted.quantity + 1 },
        ];
        localStorage.setItem('cart', JSON.stringify(cartList));
        return cartList;
      } else {
        state.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(state));
        return state;
      }
    default:
      return state;
  }
};

export default Cart;
