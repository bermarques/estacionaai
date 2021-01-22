import { handleUser } from "./action";
import requestUserData from "../../../requests/RequestUser";

export const addUserThunk = (token, userID) => {
  return async (dispatch) => {
    let user = await requestUserData(token, userID);
    if (user === "jwt expired" || token === "") {
      dispatch(handleUser(""));
    } else {
      dispatch(handleUser(user.data));
    }
  };
};
