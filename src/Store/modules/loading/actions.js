import { change } from "./types";

export const changeLoading = (isLoading) => {
  return {
    type: change,
    isLoading: isLoading,
  };
};
