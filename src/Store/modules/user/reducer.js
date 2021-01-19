import { addUser } from "./types";

const defaultState = { user: "" };

const reducer = (state = defaultState, action) => {
  const { type, user } = action;
  console.log(user);

  switch (type) {
    case addUser:
      return { user: user };

    default:
      return state;
  }
};

export default reducer;
