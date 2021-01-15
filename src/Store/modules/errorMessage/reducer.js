import { errorPost, cleanError } from "./types";

const defaultState = { message: "" };

const reducer = (state = defaultState, action) => {
  const { type, errorMessage } = action;
  console.log(errorMessage);

  switch (type) {
    case errorPost:
      return { message: errorMessage };

    default:
      return state;
  }
};

export default reducer;
