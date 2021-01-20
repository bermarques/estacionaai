import { handleUser } from "./action";
import requestUserData from "../../../requests/RequestUser";

export const addUserThunk = (token, userID) => {
  return async (dispatch, state) => {
    const user = token !== "" ? await requestUserData(token, userID).data : "";

    dispatch(handleUser(user));
  };
};
