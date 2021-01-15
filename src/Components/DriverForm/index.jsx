import "../../Style/DriverForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Helpers/DriverForm/index";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useState } from "react";
import registerRequest from "../../requests/Register";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledButton,
} from "../../Style/globalStyles";

const DriverFormComponent = () => {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
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
    <div>
      <Alert show={true} variant={"danger"}>
        {feedBackMessage}asdf
      </Alert>
      <StyledForm onSubmit={handleSubmit(sendForm)}>
        <StyledLabel>Nome</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Nome"
          name="name"
          ref={register}
        />
        <StyledLabel>E-mail</StyledLabel>
        <StyledInput
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register}
        />
        <StyledLabel>Senha</StyledLabel>

        <div>
          <StyledInput
            type={visible ? "text" : "password"}
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
        <StyledLabel>Confirmar Senha</StyledLabel>

        <div>
          <StyledInput
            placeholder="Confirmação Senha"
            type={visible ? "text" : "password"}
            name="password_confirmation"
            ref={register}
          />
          <VisibilityIcon
            className="icon-visible"
            fontSize="large"
            onClick={() => changeVisibility()}
          />
        </div>

        <StyledLabel>Veículo</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Modelo"
          name="car"
          ref={register}
        />
        <StyledLabel>Placa</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Placa"
          name="plate"
          ref={register}
        />
        <div>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.password_confirmation?.message ||
            errors.car?.message ||
            errors.plate?.message}
        </div>
        <StyledButton type="submit">CADASTRAR</StyledButton>
      </StyledForm>
    </div>
  );
};

export default DriverFormComponent;
