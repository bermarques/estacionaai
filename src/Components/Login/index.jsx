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
import { handleAddError } from "../../Store/modules/errorMessage/actions";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const history = useHistory();
  const [cookies, setCookie] = useCookies();
  const sendForm = async (event) => {
    dispatch(changeLoading(true));
    const res = await requestUser(loginData, "login");
    console.log(res);
    if (res === "Incorrect password") {
      dispatch(changeLoading(false));

      dispatch(handleAddError("Senha Incorreta", "danger"));
      setTimeout(() => dispatch(handleAddError("")), 4000);
    }
    if (res === "Cannot find user") {
      dispatch(changeLoading(false));

      dispatch(handleAddError("Usuário não encontrado", "danger"));
      setTimeout(() => dispatch(handleAddError("")), 4000);
    }
    if (res.status === 200) {
      dispatch(handleAddError("Sucesso", "success"));
      setCookie("token", res.data.accessToken);
      let decoded = jwt_decode(res.data.accessToken);
      setCookie("ID", decoded.sub);
      dispatch(addUserThunk(res.data.accessToken, decoded.sub));
      history.push("/vagas");
    }
    dispatch(changeLoading(false));
    console.log(res);
  };

  useEffect(() => {
    const message =
      errors.name?.message ||
      errors.email?.message ||
      errors.password?.message ||
      errors.password_confirmation?.message ||
      errors.car?.message ||
      errors.plate?.message;
    message && dispatch(handleAddError(message, "danger"));
    setTimeout(() => dispatch(handleAddError("")), 4000);
  }, [errors]);

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
    <StyledForm onSubmit={handleSubmit(sendForm)}>
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
      <StyledButton type="submit" className="send-button-login">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
