import { handleUser } from "./action";
import requestUserData from "../../../requests/RequestUser";

export const addUserThunk = (token, userID) => {
  return async (dispatch, state) => {
    const user = await requestUserData(token, userID);
    console.log(user.data);

    dispatch(handleUser(user.data));
  };
};
