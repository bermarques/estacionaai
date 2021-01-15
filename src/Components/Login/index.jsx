import "../../Style/Login/style.css";
import { schema } from "../../Helpers/Login/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = (event) => {
    event.preventDefault();

    axios
      .post("https://server-estaciona-ai.herokuapp.com/login", loginData)
      .then((res) => {
        console.log(loginData);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.accessToken);
        }
      })
      .catch((error) => error.response.data);
  };

  const changeVisibility = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleEmail = (evt) => {
    setLoginData({ ...loginData, email: evt.target.value });
  };

  const handlePassword = (evt) => {
    setLoginData({ ...loginData, password: evt.target.value });
  };

  return (
    <div className="master">
      <form
        className="master-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit(sendForm(evt));
        }}
      >
        E-mail
        <input
          className="input-form"
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register}
          onChange={handleEmail}
          value={loginData.email}
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
              onChange={handlePassword}
              value={loginData.password}
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
              onChange={handlePassword}
              value={loginData.password}
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
