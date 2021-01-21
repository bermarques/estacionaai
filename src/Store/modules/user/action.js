import { addUser } from "./types";

export const handleUser = (user) => {
  return {
    type: addUser,
    user,
  };
};
