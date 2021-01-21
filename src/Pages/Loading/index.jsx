import LoadSpinner from "../../Components/LoadSpinner";
import { StyledLoadContent } from "./style";

const Loading = () => {
  return (
    <StyledLoadContent>
      <LoadSpinner />
    </StyledLoadContent>
  );
};

export default Loading;
