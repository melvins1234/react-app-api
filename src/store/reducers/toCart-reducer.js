let cartList = [
  {
    id: "",
    image: "",
    product: "",
    price: '',
    discountedPrice: '',
    stars: '',
  },
];

const Cart = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      state.push(action.payload)
      return state
    default:
      return state;
  }
};

export default Cart;
