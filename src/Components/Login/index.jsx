import { schema } from "../../Helpers/Login/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import requestUser from "../../requests/Register";
import jwt_decode from "jwt-decode";
import { addUserThunk } from "../../Store/modules/user/thunk";
import { useDispatch } from "react-redux";
import {
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledForm,
  StyleVisibilityIcon,
} from "../../Style/globalStyles";
import { useCookies } from "react-cookie";
import { useHistory, useLocation } from "react-router-dom";
import { changeLoading } from "../../Store/modules/loading/actions";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const history = useHistory();
  const [cookies, setCookie] = useCookies();
  const sendForm = async (event) => {
    event.preventDefault();
    const res = await requestUser(loginData, "login");
    if (res.status === 200) {
      setCookie("token", res.data.accessToken);
      let decoded = jwt_decode(res.data.accessToken);
      setCookie("ID", decoded.sub);
      dispatch(addUserThunk(res.data.accessToken, decoded.sub));
      history.push("/vagas");
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
      <div>
        <StyledButton type="submit" className="send-button-login">
          Entrar
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default LoginForm;
