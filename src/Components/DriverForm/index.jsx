import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Helpers/DriverForm/index";
import { useState, useEffect } from "react";
import registerRequest from "../../requests/Register";
import { useHistory } from "react-router-dom";
import {
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledButton,
  StyleVisibilityIcon,
  StyledUploadButton,
  ImageDiv,
} from "../../Style/globalStyles";
import { useDispatch } from "react-redux";
import { handleAddError } from "../../Store/modules/errorMessage/actions";
import uploadImage from "../../requests/uploadImages";
import { changeLoading } from "../../Store/modules/loading/actions";

const DriverFormComponent = () => {
  const [userImage, setUserImage] = useState("");
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const sendForm = async (event) => {
    dispatch(changeLoading(true));
    const data = { ...event, image: userImage };
    console.log(data);
    const response = await registerRequest(data, "register");
    if (response === "Email already exists") {
      dispatch(changeLoading(false));

      dispatch(handleAddError("Email já cadastrado", "danger"));
    }
    setTimeout(() => dispatch(handleAddError("")), 4000);
    response.status === 201 && history.push("/login");
    dispatch(changeLoading(false));
  };

  const changeVisibility = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const changeImage = async (e) => {
    setUserImage(await uploadImage(e));
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

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <StyledLabel>Nome</StyledLabel>
      <StyledInput type="text" placeholder="Nome" name="name" ref={register} />
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
        <StyleVisibilityIcon
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
        <StyleVisibilityIcon
          className="icon-visible"
          fontSize="large"
          onClick={() => changeVisibility()}
        />
      </div>
      <StyledLabel>Veículo</StyledLabel>
      <StyledInput type="text" placeholder="Modelo" name="car" ref={register} />
      <StyledLabel>Placa</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Placa"
        name="plate"
        ref={register}
      />
      <StyledLabel>Imagem</StyledLabel>
      <ImageDiv>
        <div>
          {userImage && <img src={`${userImage}`} alt="Imagem do usuário" />}
        </div>
        <StyledUploadButton>
          Upload
          <input name="image" type="file" onChange={changeImage} />
        </StyledUploadButton>
      </ImageDiv>
      <StyledButton type="submit">CADASTRAR</StyledButton>
    </StyledForm>
  );
};

export default DriverFormComponent;
