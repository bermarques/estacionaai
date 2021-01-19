import "../../Style/Welcome/style.css";
import { useHistory } from "react-router-dom";
import { CarIcon } from "../../Components/icon/index";

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="master-welcome">
      <CarIcon />
      <div className="center">
        <h1 className="title">Um novo conceito em garagens</h1>
        <button
          className="welcome-button"
          onClick={() => history.push("/cadastroDeVagas")}
        >
          Expore garagens perto de você!
        </button>

        <button
          className="welcome-button"
          onClick={() => history.push("/login")}
        >
          Entre
        </button>
      </div>
      <div className="welcome"></div>
    </div>
  );
};

export default Welcome;
