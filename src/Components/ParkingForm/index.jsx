import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, parkingFormdata } from "../../Helpers/ParkingForm/index";
import uploadImage from "../../requests/uploadImages";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleAddError } from "../../Store/modules/errorMessage/actions";
import {
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledSelect,
  StyledUploadButton,
  ImageDiv,
} from "../../Style/globalStyles";
import { requestAddress } from "../../requests/requestAdress";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { StyledCheckLabel, StyledCheckInput } from "./style";

const ParkingLocation = () => {
  const [cepData, setCepData] = useState({
    logradouro: "",
    bairro: "",
    uf: "",
    cidade: "",
  });
  const [cep1, setCep] = useState();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [cookies] = useCookies();
  const sendForm = (event) => {
    const data = { ...event, image: parkImage, userId: cookies.ID };
    console.log(requestAddress(data, cookies.token));
    history.push("/vagas");
  };

  const [parkImage, setParkImage] = useState();

  const changeImage = async (e) => {
    setParkImage(await uploadImage(e));
  };

  const onBlurCep = (event) => {
    const { value } = event.target;
    const cep = value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((data) => {
      setCepData({
        logradouro: data.data.logradouro,
        bairro: data.data.bairro,
        uf: data.data.uf,
        cidade: data.data.localidade,
      });
      console.log(data);
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(errors);
    const message =
      errors.image?.message ||
      errors.number?.message ||
      errors.cep?.message ||
      errors.price?.message;

    dispatch(handleAddError(message, "danger"));
    setTimeout(() => dispatch(handleAddError("")), 4000);
  }, [errors]);

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      {parkingFormdata.map(({ placeholder, name, type }, index) => (
        <div>
          <StyledLabel>{placeholder}</StyledLabel>
          <StyledInput
            key={index}
            name={name}
            placeholder={placeholder}
            type={type}
            ref={register}
          />
        </div>
      ))}
      <div>
        <StyledLabel>CEP</StyledLabel>
        <StyledInput
          ref={register}
          type="number"
          onChange={(e) => setCep(e.target.value)}
          value={cep1}
          onBlur={onBlurCep}
          name="cep"
        />
      </div>
      <StyledLabel>Rua</StyledLabel>
      <StyledInput
        className="input-form"
        name="street"
        type="text"
        value={cepData.logradouro}
        disabled={!cepData.logradouro}
        ref={register}
      />
      <StyledLabel>Número</StyledLabel>
      <StyledInput
        className="input-form"
        name="number"
        type="text"
        disabled={!cepData.logradouro}
        ref={register}
      />
      <StyledLabel>Bairro</StyledLabel>
      <StyledInput
        className="input-form"
        name="neighborhood"
        type="text"
        value={cepData.bairro}
        disabled={!cepData.bairro}
        ref={register}
      />
      <div className="img-div-park">
        <div>
          <StyledLabel>Cidade</StyledLabel>
          <StyledInput
            className="input-form-city"
            name="city"
            type="text"
            value={cepData.cidade}
            disabled={!cepData.cidade}
            ref={register}
          />
        </div>
        <div>
          <StyledLabel>Estado</StyledLabel>
          <StyledSelect
            className="input-form-state"
            name="state"
            disabled={!cepData.uf}
          >
            <option ref={register} value={cepData.uf} className="input-form">
              {cepData.uf}
            </option>
          </StyledSelect>
        </div>
      </div>
      <StyledLabel>Telefone para contato</StyledLabel>
      <StyledInput
        name="phone"
        type="number"
        ref={register}
        placeholder="Telefone"
      />
      <StyledLabel>Veículos Aceitos</StyledLabel>
      <div>
        <StyledCheckInput
          name="car"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledCheckLabel for="car" value="car">
          Carro
        </StyledCheckLabel>
      </div>
      <div>
        <StyledCheckInput
          name="motorcycle"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledCheckLabel for="motorcycle" value="motorcycle">
          Moto
        </StyledCheckLabel>
      </div>
      <div>
        <StyledCheckInput
          name="truck"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledCheckLabel for="truck" value="truck">
          Caminhonete
        </StyledCheckLabel>
      </div>
      <StyledLabel>Tipo de locação</StyledLabel>
      <div>
        <StyledCheckInput
          name="daily"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledCheckLabel for="daily" value="daily">
          Diária
        </StyledCheckLabel>
      </div>
      <div>
        <StyledCheckInput
          name="weekly"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledCheckLabel for="weekly" value="weekly">
          Semanal
        </StyledCheckLabel>
      </div>
      <div>
        <StyledCheckInput
          name="monthly"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledCheckLabel for="monthly" value="monthly">
          Mensal
        </StyledCheckLabel>
      </div>
      <StyledLabel>Foto da Garagem</StyledLabel>{" "}
      <ImageDiv>
        <div>
          {parkImage && <img src={parkImage} alt="imagem da vaga"></img>}
        </div>
        <StyledUploadButton for="image">Upload</StyledUploadButton>
        <input id="image" name="image" onChange={changeImage} type="file" />
      </ImageDiv>
      <StyledButton onChange={changeImage} type="submit">
        Enviar
      </StyledButton>
    </StyledForm>
  );
};

export default ParkingLocation;
