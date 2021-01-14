import "../../Style/Login/style.css";
import { schema } from "../../Helpers/Login/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useState } from "react";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = (event) => {
    delete event.password_confirmation;
    console.log(event);
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
      <form className="master-form" onSubmit={handleSubmit(sendForm)}>
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
        <button className="button-send" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
