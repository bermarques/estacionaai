import { errorPost } from "./types";

export const handleAddError = (errorMessage) => {
  return {
    type: errorPost,
    errorMessage: errorMessage,
  };
};
