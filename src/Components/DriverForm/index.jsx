import "../../Style/DriverForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Helpers/DriverForm/index";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useState } from "react";
import registerRequest from "../../requests/Register";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

const DriverFormComponent = () => {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, errors } = useForm({});
  const [feedBackMessage, setFeedBackMessage] = useState();

  const history = useHistory();
  const sendForm = async (event) => {
    const message = await registerRequest(event);
    message === 201 && history.push("/login");
    console.log(message);
    if (message === "Email already exists") {
      console.log(feedBackMessage);
      setFeedBackMessage("Email já cadastrado");
      setTimeout(() => setFeedBackMessage(""), 3000);
    }
  };

  const changeVisibility = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <div className="master">
      <Alert variant="danger">{feedBackMessage}</Alert>
      <form className="master-form" onSubmit={handleSubmit(sendForm)}>
        Nome
        <input
          className="input-form"
          type="text"
          placeholder="Nome"
          name="name"
          ref={register}
        />
        E-mail
        <input
          className="input-form"
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register}
        />
        Senha
        {visible ? (
          <div>
            <input
              className="input-form"
              type="text"
              placeholder="Senha"
              name="password"
              ref={register}
            />
            <VisibilityIcon
              className="icon-visible"
              fontSize="large"
              onClick={() => changeVisibility()}
            />
          </div>
        ) : (
          <div>
            <input
              className="input-form"
              type="password"
              placeholder="Senha"
              name="password"
              ref={register}
            />
            <VisibilityIcon
              className="icon-visible"
              fontSize="large"
              onClick={() => changeVisibility()}
            />
          </div>
        )}
        Confirmar Senha
        {visible ? (
          <div>
            <input
              className="input-form"
              placeholder="Confirmação Senha"
              type="text"
              name="password_confirmation"
              ref={register}
            />
            <VisibilityIcon
              className="icon-visible"
              fontSize="large"
              onClick={() => changeVisibility()}
            />
          </div>
        ) : (
          <div>
            <input
              className="input-form"
              placeholder="Confirmação Senha"
              type="password"
              name="password_confirmation"
              ref={register}
            />
            <VisibilityIcon
              className="icon-visible"
              fontSize="large"
              onClick={() => changeVisibility()}
            />
          </div>
        )}
        <div>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.password_confirmation?.message}
        </div>
        <button className="button-send" type="submit">
          CADASTRAR
        </button>
      </form>
    </div>
  );
};

export default DriverFormComponent;
