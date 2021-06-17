let initState = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const addUser = (state = initState, action) => {
  switch (action.type) {
    case "add-user":
      let isExistedIndex = state.findIndex(
        (e) => e.email === action.payload.email
      );
      if (isExistedIndex >= 0) {
      } else state.push(action.payload);

      return state;
    default:
      return state;
  }
};

export default addUser;
