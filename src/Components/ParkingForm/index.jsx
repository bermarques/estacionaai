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

  const sendForm = (event) => {
    console.log(event);
    const data = { ...event, image: parkImage };
    requestAddress(data, "address");
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
      <StyledLabel>Veículos Aceitos</StyledLabel>
      <div>
        <StyledInput
          className="check-input"
          name="car"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledLabel for="car" value="car">
          Carro
        </StyledLabel>
      </div>
      <div>
        <StyledInput
          className="check-input"
          name="motorcycle"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledLabel for="motorcycle" value="motorcycle">
          Moto
        </StyledLabel>
      </div>
      <div>
        <StyledInput
          className="check-input"
          name="truck"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledLabel for="truck" value="truck">
          Caminhonete
        </StyledLabel>
      </div>
      <StyledLabel>Tipo de locação</StyledLabel>
      <div>
        <StyledInput
          className="check-input"
          name="daily"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledLabel for="daily" value="daily">
          Diária
        </StyledLabel>
      </div>
      <div>
        <StyledInput
          className="check-input"
          name="weekly"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledLabel for="weekly" value="weekly">
          Semanal
        </StyledLabel>
      </div>
      <div>
        <StyledInput
          className="check-input"
          name="monthly"
          type="checkbox"
          ref={register}
          value={true}
        />
        <StyledLabel for="monthly" value="monthly">
          Mensal
        </StyledLabel>
      </div>
      <StyledLabel>Foto da Garagem</StyledLabel>{" "}
      <ImageDiv>
        <div>
          {parkImage && <img src={parkImage} alt="imagem da vaga"></img>}
        </div>
        <StyledUploadButton for="image">Upload</StyledUploadButton>
        <input id="image" name="image" onChange={changeImage} type="file" />
      </ImageDiv>
      <StyledButton
        className="button-send-parking"
        onChange={changeImage}
        type="submit"
      >
        Enviar
      </StyledButton>
    </StyledForm>
  );
};

export default ParkingLocation;
