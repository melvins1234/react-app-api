const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "user-login":
      return (state = { isLoggedIn: true, userLoggedIn: action.payload });
    case "user-logout":
      return (state = false);
    default:
      return state;
  }
};

export default isLoggedIn;
