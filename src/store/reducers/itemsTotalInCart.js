let initState = 0;
if (JSON.parse(localStorage.getItem("cart"))) {
  JSON.parse(localStorage.getItem("cart")).map((e) => {
    initState = e.discountedPrice + initState;
  });
}

const itemsTotalInCart = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default itemsTotalInCart;
