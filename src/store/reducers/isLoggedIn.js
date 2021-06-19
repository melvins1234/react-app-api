const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "user-login":
      return (state = { isLoggedIn: true, userLoggedIn: action.payload });
    case "user-logout":
      return false;
    default:
      return false;
  }
};

export default isLoggedIn;
