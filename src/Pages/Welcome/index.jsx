import "../../Style/Welcome/style.css";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="master-welcome">
      <div className="logo"></div>
      <div className="center">
        <h1 className="title">Um novo conceito em garagens</h1>
        <button
          className="welcome-button"
          onClick={() => history.push("/parkings")}
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
