import "../../Style/Login/style.css";
import { schema } from "../../Helpers/Login/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import requestUser from "../../requests/Register";
import {
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledForm,
  StyleVisibilityIcon,
} from "../../Style/globalStyles";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = async (event) => {
    event.preventDefault();
    const res = await requestUser(loginData, "login");
    if (res.status === 200) {
      localStorage.setItem("token", res.data.accessToken);
    }
    console.log(res);
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
    <StyledForm
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit(sendForm(evt));
      }}
    >
      <StyledLabel>E-mail</StyledLabel>
      <StyledInput
        type="email"
        placeholder="E-mail"
        name="email"
        ref={register}
        onChange={handleEmail}
        value={loginData.email}
      />
      <StyledLabel>Senha</StyledLabel>
      <div>
        <StyledInput
          type={visible ? "text" : "password"}
          placeholder="Senha"
          name="password"
          ref={register}
          onChange={handlePassword}
          value={loginData.password}
        />
        <StyleVisibilityIcon
          fontSize="large"
          onClick={() => changeVisibility()}
        />
      </div>
      <StyledButton type="submit">Entrar</StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
