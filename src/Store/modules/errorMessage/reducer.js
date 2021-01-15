import { errorPost } from "./types";

const defaultState = { message: "" };

const reducer = (state = defaultState, action) => {
  const { type, errorMessage, typeMessage } = action;
  console.log(errorMessage);

  switch (type) {
    case errorPost:
      return { typeMessage: typeMessage, message: errorMessage };

    default:
      return state;
  }
};

export default reducer;
