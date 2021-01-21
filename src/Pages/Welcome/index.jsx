import "../../Style/Welcome/style.css";
import { useHistory } from "react-router-dom";
import { CarIcon } from "../../Components/icon/index";
import {
  WelcomeButton,
  WelcomeTitle,
  MasterWelcome,
} from "../../Style/globalStyles";

const Welcome = () => {
  const history = useHistory();
  return (
    <MasterWelcome>
      <CarIcon />
      <WelcomeTitle>Um novo conceito em garagens</WelcomeTitle>
      <WelcomeButton onClick={() => history.push("/login")}>
        Entre
      </WelcomeButton>
      <div className="welcome"></div>
    </MasterWelcome>
  );
};

export default Welcome;
