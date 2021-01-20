import "../../../Style/ParkingForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, parkingFormdata } from "../../../Helpers/ParkingForm/index";
import uploadImage from "../../../requests/uploadImages";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleAddError } from "../../../Store/modules/errorMessage/actions";
import {
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledSelect,
  StyledUploadButton,
  ImageDiv,
} from "../../../Style/globalStyles";
import { requestAddress } from "../../../requests/requestAdress";
import { useHistory } from "react-router-dom";

const ParkingLocation = () => {
  const [cepData, setCepData] = useState({
    logradouro: "",
    bairro: "",
    uf: "",
    cidade: "",
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory;
  const sendForm = (event) => {
    const data = { ...event, image: parkImage };
    requestAddress(data, "address");
    history.pushState("/vagas");
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
    const message =
      errors.image?.message ||
      errors.street?.message ||
      errors.number?.message ||
      errors.neighborhood?.message ||
      errors.city?.message ||
      errors.cep?.message ||
      errors.price?.message ||
      errors.days?.message;
    dispatch(handleAddError(message, "danger"));
    setTimeout(() => dispatch(handleAddError("")), 4000);
  }, [errors]);

  return (
    <div className="master-parking-form">
      <StyledForm onSubmit={handleSubmit(sendForm)} className="style-form-park">
        {parkingFormdata.map(({ placeholder, name, type }, index) => (
          <div>
            <div>{placeholder}</div>
            <StyledInput
              className="input-form"
              key={index}
              name={name}
              placeholder={placeholder}
              type={type}
              ref={register}
            />
          </div>
        ))}
        <div>
          <div>CEP</div>
          <StyledInput className="input-form" onBlur={onBlurCep} />
        </div>
        Rua
        <StyledInput
          className="input-form"
          name="street"
          type="text"
          value={cepData.logradouro}
          disabled={!cepData.logradouro}
          ref={register}
        />
        Número
        <StyledInput
          className="input-form"
          name="number"
          type="text"
          disabled={!cepData.logradouro}
          ref={register}
        />
        Bairro
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
            Cidade
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
            Estado
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
        Valor
        <StyledInput
          className="input-form"
          type="number"
          placeholder="Valor"
          name="price"
          ref={register}
        />
        Veículos Aceitos
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="car"
            type="checkbox"
            ref={register}
            value="monthly"
          />
          <StyledLabel for="car" value="car">
            Carro
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="motorcycle"
            type="checkbox"
            ref={register}
            value="motorcycle"
          />
          <StyledLabel for="motorcycle" value="motorcycle">
            Moto
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="truck"
            type="checkbox"
            ref={register}
            value="truck"
          />
          <StyledLabel for="truck" value="truck">
            Caminhonete
          </StyledLabel>
        </div>
        Tipo de locação
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="daily"
            type="checkbox"
            ref={register}
          />
          <StyledLabel for="daily" value="daily">
            Diária
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="weekly"
            type="checkbox"
            ref={register}
            value="weekly"
          />
          <StyledLabel for="weekly" value="weekly">
            Semanal
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="monthly"
            type="checkbox"
            ref={register}
            value="monthly"
          />
          <StyledLabel for="monthly" value="monthly">
            Mensal
          </StyledLabel>
        </div>
        <StyledLabel>Foto da Garagem</StyledLabel>{" "}
        <div className="img-div-park">
          <ImageDiv>
            {parkImage && <img src={`${parkImage}`} alt="imagem da vaga"></img>}
          </ImageDiv>
          <StyledUploadButton>
            Upload <input name="image" type="file" />
          </StyledUploadButton>
        </div>
        <StyledButton className="button-send" type="submit">
          Enviar
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default ParkingLocation;
