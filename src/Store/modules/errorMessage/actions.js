import { errorPost } from "./types";

export const handleAddError = (errorMessage, typeMessage) => {
  return {
    type: errorPost,
    errorMessage: errorMessage,
    typeMessage: typeMessage,
  };
};
