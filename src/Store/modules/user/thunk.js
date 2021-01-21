import { handleUser } from "./action";
import requestUserData from "../../../requests/RequestUser";

export const addUserThunk = (token, userID) => {
  return async (dispatch) => {
    let user = await requestUserData(token, userID);
    token !== "" ? dispatch(handleUser(user.data)) : dispatch(handleUser(""));
  };
};
