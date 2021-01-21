import { change } from "./types";

const defaultState = { loading: false };

const reducer = (state = defaultState, action) => {
  const { type, isLoading } = action;

  switch (type) {
    case change:
      return { loading: isLoading };

    default:
      return state;
  }
};

export default reducer;
