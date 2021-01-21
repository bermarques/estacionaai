import { addUser } from "./types";

const defaultState = { user: "" };

const reducer = (state = defaultState, action) => {
  const { type, user } = action;

  switch (type) {
    case addUser:
      return { user: user };

    default:
      return state;
  }
};

export default reducer;
