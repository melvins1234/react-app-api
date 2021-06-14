let cartList = [
  {
    id: "",
    image: "",
    product: "",
    price: "",
    discountedPrice: "",
    stars: "",
  },
];

const Cart = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      // let productExistedToCart = state.some(e => e.id === action.payload.id);
      // let productExistedToCart = state.findIndex((e) => e.id === action.payload.id)
      console.log(productExistedToCart);
      // if(productExistedToCart >= 0){
      //   state.push({...action.payload, quantity: state[productExistedToCart].quantity + 1})
      //   // state.splice(productExistedToCart, 1);
      // }else 
      state.push(action.payload)
    default:
      return state;
  }
};

export default Cart;
